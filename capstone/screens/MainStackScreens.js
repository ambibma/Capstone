import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';

import CardDetails from './CardDetails';
import ProfileCreateScreen from './ProfileCreateScreen';
import HomeTabs from './HomeTabs';
import ProfileStackScreens from './ProfileStackScreens';
import AuthStackScreens from './AuthStackScreens';



const MainStack = createNativeStackNavigator();


const MainStackScreens = () => {
  const {user} = useAuth()
  console.log(user)


  return (
    <MainStack.Navigator>
              {user ? (
                <>
                  <MainStack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
                  <MainStack.Screen name="CardDetails" component={CardDetails} />
                  <MainStack.Screen name="Profile" component={ProfileStackScreens} />
                  <MainStack.Screen name="ProfileCreateScreen" component={ProfileCreateScreen} />
                </>
              ) : (
                <MainStack.Screen name="Auth" component={AuthStackScreens} options={{ headerShown: false }} />
              )}
            </MainStack.Navigator>
  )
}

export default MainStackScreens

const styles = StyleSheet.create({})