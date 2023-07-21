import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
  const navigation = useNavigation();

  function HandleButtonPress() {
    navigation.navigate("ProfileCreateScreen")
  }
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="Create Profile" onPress={HandleButtonPress}>Create Profile</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


})