import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PROFILES } from '../dummyData/dummy-data'
import ProfileList from '../components/ProfileList'

const HomeScreen = ({route, navigation}) => {
   


  return (
    <ProfileList
      items={PROFILES}
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
