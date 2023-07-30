import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import ProfileForm from '../components/ProfileForm'
import Button from '../components/Button'
import { UsersContext } from '../store/users-context'

import useAuth from '../hooks/useAuth'



export default function ProfileCreateScreen({route, navigation}) {

  const usersCtx = useContext(UsersContext);
  const editedUserId = route.params?.userId;
  const isEditing = !!editedUserId;
  const { user } = useAuth()
 
  function CancelHandler() {
    navigation.goBack();
  }
  function ConfirmHandler(userData) {
    if(isEditing) {
      usersCtx.updateUserProfile(user.uid, profileData);
      // usersCtx.updateUser(
      //   editedUserId,
      //   userData,
      // )

    } else {
      usersCtx.addUserProfile(userId, profileData)
    //   usersCtx.addUser({
    //     userData
    //   })
    // }
    navigation.goBack();
    }
  }

  return (
    <ScrollView> 
      
      <ProfileForm 
      onCancel={CancelHandler}
      onSubmit={ConfirmHandler}
      />
   

    </ScrollView>
  )
}

const styles = StyleSheet.create({
 

})