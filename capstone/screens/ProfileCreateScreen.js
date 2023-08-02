import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';
import { UsersContext } from '../store/users-context';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

export default function ProfileCreate({ navigation, route }) {
  const { addUserProfile } = useContext(UsersContext);
  const { user } = useAuth();
  const  userId  = route.params;

  function CancelHandler() {
    navigation.goBack();
  }

  async function ConfirmHandler(userId, profileData) {
    try {
      await addUserProfile(user.uid, profileData);
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  }

  return (
    <ScrollView>
      <ProfileForm
        onCancel={CancelHandler}
        onSubmit={ConfirmHandler}
        isEditing={false}
        initialValues={null}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});