import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CardDetails from './screens/CardDetails';
import ProfileCreateScreen from './screens/ProfileCreateScreen';

import { AuthProvider} from './hooks/useAuth';
import useAuth from './hooks/useAuth';
import UsersContextProvider from './store/users-context';
import AuthStackScreens from './screens/AuthStackScreens';
import MainStackScreens from './screens/MainStackScreens';


export default  function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
      <AuthProvider>
          <UsersContextProvider>
            <MainStackScreens/>
          </UsersContextProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
