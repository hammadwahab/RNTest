import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';
import {deleteUserData, fetchUserData, updateUserData} from '../services/api';

interface User {
  id: number;
  name: string;
}

interface GlobalState {
  users: [];
  deleteUser: (id: number) => void;
  updateUser: (item: {id: number; value: string}, cb: () => void) => void;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    fetchUserData()
      .then(res => setUser(res))
      .catch(err => {
        Alert.alert('Error while fetching data from api: ', err);
      });
  }, []);

  const deleteUser = (id: number) => {
    const temp = [...users];
    const index = temp.findIndex(obj => obj.id === id);
    if (index > -1) {
      // hit delete user api
      deleteUserData(id)
        .then(() => {
          temp.splice(index, 1);
          setUser(temp);
        })
        .catch(err => {
          Alert.alert('Error while deleting user', err);
        });
    }
  };

  const updateUser = (item: {id: number; value: string}, cb: () => {}) => {
    const {id, value} = item;
    const temp = [...users];
    const index = temp.findIndex(obj => obj.id === id);
    if (index > -1) {
      // hit update user api
      updateUserData(id, value)
        .then(() => {
          temp[index]['Column 1'] = value;
          setUser(temp);
          cb();
        })
        .catch(err => {
          Alert.alert('Error while updating user', err);
        });
    }
  };

  const stateValue = {
    users,
    deleteUser,
    updateUser,
  };

  return (
    <GlobalContext.Provider value={stateValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
