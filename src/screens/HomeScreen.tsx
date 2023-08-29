import _ from 'lodash';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useGlobalState} from '../context/GlobalState';
import UserItem from '../components/UserItem';

const HomeScreen = () => {
  const {users, deleteUser} = useGlobalState();

  const renderItem = ({item}: {item: {id: number; value: string}}) => (
    <UserItem item={item} deleteItem={deleteUser} />
  );

  return _.isEmpty(users) ? (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  ) : (
    <FlatList
      contentContainerStyle={styles.contentContainerSyle}
      showsVerticalScrollIndicator={false}
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerSyle: {
    padding: 10,
    paddingBottom: 20,
  },
});

export default HomeScreen;
