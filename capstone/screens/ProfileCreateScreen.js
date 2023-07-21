import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProfileForm from '../components/ProfileForm'
import Button from '../components/Button'



export default function ProfileCreateScreen() {
  function CancelHandler() {
    console.log("Canceled!")
  }
  function SaveHandler() {
    console.log("Saved")
  }

  return (
    <ScrollView>

   
      
      <ProfileForm></ProfileForm>
      <View style={styles.buttonContainer}>
      <Button style={styles.button} mode='flat' onPress={CancelHandler}>Cancel</Button>
      <Button style={styles.button} onPress={SaveHandler}>Save</Button>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
   justifyContent: 'center',   
   alignItems: 'center',
   padding: 8,
   marginHorizontal: 40 ,  
  
  },
  button: {
    flex: 1,
    minWidth: 120,
    marginHorizontal: 8,  
   
  },

})