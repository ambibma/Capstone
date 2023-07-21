import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetails from './screens/CardDetails';
import UsersContextProvider from './store/users-context';

import ProfileCreateScreen from './screens/ProfileCreateScreen';


const MainStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeTabs() {
  return ( 
    <BottomTab.Navigator screenOptions={{headerShown: false}}> 
    <BottomTab.Screen name="HomeScreen" component={HomeScreen}
      options={{
        tabBarIcon: (({color, size})=> <Ionicons name="home" color={color} size={size}></Ionicons>),
        headerShown: false,
      }}
    />
    <BottomTab.Screen name="Profile" component={ProfileStackScreens}
      options={{
        tabBarIcon: (({color, size})=> <Ionicons name="person" color={color} size={size}></Ionicons>),
        headerShown: false,
      }}
    /> 
    </BottomTab.Navigator>
  )

}
function ProfileStackScreens(){
  return <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>    

  </ProfileStack.Navigator>
}


export default function App() {
  return (

    <SafeAreaView style= {styles.screen}>

    <UsersContextProvider> 
      <NavigationContainer>
        
      <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
      <MainStack.Screen name="Profile" component={ProfileStackScreens}/>
      <MainStack.Screen name="ProfileCreateScreen" component={ProfileCreateScreen}/>
      <MainStack.Screen name="CardDetails" component={CardDetails}></MainStack.Screen>

      </MainStack.Navigator>
      </NavigationContainer>   
      </UsersContextProvider>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  },
});
