import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const UserItem = (props: {deleteItem: Function; item: {id: number}}) => {
  const {deleteItem, item} = props;
  const {id} = item;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const userData = () => (
    <View>
      <Text style={styles.userIdStyle}>User Id: {id}</Text>
      <Text style={styles.userNameStyle}>Name: {item['Column 1']}</Text>
    </View>
  );

  const deleteUserButton = () => (
    <TouchableOpacity
      style={styles.deleteUserButton}
      onPress={() => deleteItem(id)}>
      <Text style={styles.deleteUserButtonText}>Delete User</Text>
    </TouchableOpacity>
  );

  const updateUserButton = () => (
    <TouchableOpacity
      style={styles.updateUserButton}
      onPress={() =>
        navigation.navigate('Update', {id: id, name: item['Column 1']})
      }>
      <Text style={styles.updateUserButtonText}>Update User</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userDataContainer}>
        {userData()}
        {deleteUserButton()}
        {updateUserButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  userDataContainer: {
    padding: 10,
  },
  userIdStyle: {
    fontSize: 20,
  },
  userNameStyle: {
    marginVertical: 10,
    fontSize: 20,
  },
  updateUserButton: {
    backgroundColor: 'grey',
    elevation: 10,
    shadowOpacity: 5,
    shadowRadius: 1,
    borderRadius: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  updateUserButtonText: {
    padding: 15,
    alignSelf: 'center',
  },
  deleteUserButton: {
    backgroundColor: 'grey',
    elevation: 10,
    shadowOpacity: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 1,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  deleteUserButtonText: {
    alignSelf: 'center',
    padding: 5,
  },
});

export default UserItem;
