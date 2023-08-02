import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from './EditProfileScreen';


const ProfileStack = createNativeStackNavigator();

const ProfileStackScreens = () => {
    
      return (
        <ProfileStack.Navigator>
          <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
          <ProfileStack.Screen name="EditProfileScreen" component={EditProfileScreen} />

          
        </ProfileStack.Navigator>
      );
    }
  


export default ProfileStackScreens