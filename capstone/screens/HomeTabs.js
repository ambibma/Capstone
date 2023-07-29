import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './HomeScreen';
 import ProfileStackScreens from './ProfileStackScreens';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { Ionicons } from '@expo/vector-icons';

 const BottomTab = createBottomTabNavigator();


const HomeTabs = () => {
  return (
    
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
          <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileStackScreens}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
              headerShown: false,
            }}
          />
        </BottomTab.Navigator>
      );
    }

export default HomeTabs

const styles = StyleSheet.create({})