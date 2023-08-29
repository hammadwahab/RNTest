import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useGlobalState} from '../context/GlobalState';

const UpdateScreen = (props: {route: {params: {id: number; name: string}}}) => {
  const {id, name} = props.route.params;
  const {updateUser} = useGlobalState();
  const [value, setValue] = useState(name);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onChangeValue = (e: React.SetStateAction<string>) => setValue(e);

  const userData = () => (
    <View>
      <Text style={styles.userIdStyle}>User Id: {id}</Text>
      <View style={styles.textInputContainer}>
        <Text style={styles.userNameStyle}>Name: </Text>
        <TextInput
          autoComplete="off"
          style={styles.textInput}
          value={value}
          onChangeText={onChangeValue}
        />
      </View>
    </View>
  );

  const callback = () => navigation.goBack();

  const saveButton = () => (
    <TouchableOpacity
      style={styles.saveButton}
      onPress={() => updateUser({id, value}, callback)}>
      <Text style={styles.saveButtonText}>Save</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userDataContainer}>
        {userData()}
        {saveButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: Platform.OS === 'ios' ? 2 : 0,
  },
  saveButton: {
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
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    padding: 15,
    alignSelf: 'center',
  },
});

export default UpdateScreen;
