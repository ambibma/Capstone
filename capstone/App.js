import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';



const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: (({color, size})=> <Ionicons name="home" color={color} size={size}></Ionicons>)
          }}
        />
        <BottomTab.Screen
        name="ProfileScreen" 
        component={ProfileScreen}
        options={{
          tabBarIcon: (({color, size})=> <Ionicons name="person" color={color} size={size}></Ionicons>)
        }}
        />





      </BottomTab.Navigator>


    </NavigationContainer>
      //HomeScreen will act as the home-base that will display user profile data cards, hold the navbar.
    // <HomeScreen>
        //<ProfileCard/>
        //<NavBar>
        //<HomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
