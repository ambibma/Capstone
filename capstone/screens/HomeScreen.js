import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PROFILES } from '../dummyData/dummy-data'
import ProfileList from '../components/ProfileList/ProfileList'
import { UsersContext } from '../store/users-context'

const HomeScreen = ({route, navigation}) => {
  const usersCtx = useContext(UsersContext)


  return (
    <ProfileList
      items={usersCtx.users}
    />
  );
}

export default HomeScreen



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
