import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import ProfileForm from '../components/ProfileForm'
import Button from '../components/Button'
import { UsersContext } from '../store/users-context'



export default function ProfileCreateScreen({route, navigation}) {

  const usersCtx = useContext(UsersContext);
  const editedUserId = route.params?.userId;
  const isEditing = !!editedUserId;
 
  function CancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(userData) {
    if(isEditing) {
      usersCtx.updateUser(
        editedUserId,
        userData,
      )

    } else {
      usersCtx.addUser({
        userData
      })
    }
    navigation.goBack();
  }

  return (
    <ScrollView> 
      
      <ProfileForm 
      onCancel={CancelHandler}
      onSubmit={confirmHandler}
      />
   

    </ScrollView>
  )
}

const styles = StyleSheet.create({
 

})