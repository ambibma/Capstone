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


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function StackNavigator() {
  return <Stack.Navigator screenOptions={{headerShown: true}}> 
    <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="CardDetails" component={CardDetails}></Stack.Screen>

  </Stack.Navigator>

}



export default function App() {
  return (

    <SafeAreaView style= {styles.screen}>

    <UsersContextProvider>    
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            tabBarIcon: (({color, size})=> <Ionicons name="home" color={color} size={size}></Ionicons>),
            headerShown: false,
          }}
          />
        <BottomTab.Screen
        name="ProfileScreen" 
        component={ProfileScreen}
        options={{
          tabBarIcon: (({color, size})=> <Ionicons name="person" color={color} size={size}></Ionicons>)
        }}/>

        </BottomTab.Navigator>


        </NavigationContainer>
      </UsersContextProvider>
    </SafeAreaView>
      //HomeScreen will act as the home-base that will display user profile data cards, hold the navbar.
    // <HomeScreen>
        //<ProfileCard/>
        //<NavBar>
        //<HomeScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  },
});
