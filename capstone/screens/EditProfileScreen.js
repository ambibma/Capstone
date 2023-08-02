import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';
import { UsersContext } from '../store/users-context';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import { getProfile } from '../components/utility/getProfile';

export default function EditProfileScreen({ route, navigation }) {
  const { updateUserProfile } = useContext(UsersContext);
  const { user } = useAuth();
  const editedUserId = user?.uid;
  const isEditing = !!editedUserId;

  const [userProfileData, setUserProfileData] = useState(null);

  

  useEffect(() => {
    if (isEditing && editedUserId) {
      const fetchUserProfileData = async () => {
        try {
          const data = await getProfile(editedUserId);
          setUserProfileData(data);
          
        } catch (error) {
          console.error('Error fetching user profile data:', error);
        }
      };
      fetchUserProfileData();
    }
  }, [isEditing, editedUserId]);

  function CancelHandler() {
    navigation.goBack();
  }

  async function ConfirmHandler(profileData) {
    try {
      if (isEditing) {
        await updateUserProfile(editedUserId, profileData);
      } else {
        // Handle case if needed
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  return (
    <ScrollView>
      <ProfileForm
        onCancel={CancelHandler}
        onSubmit={ConfirmHandler}
        isEditing={isEditing}
        initialValues={isEditing ? userProfileData : null}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
