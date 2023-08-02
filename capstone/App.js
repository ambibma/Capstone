import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider} from './hooks/useAuth';
import UsersContextProvider from './store/users-context';
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
