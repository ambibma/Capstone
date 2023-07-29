

import { StyleSheet, Text, View, TextInput } from 'react-native'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Input from '../components/Input';
import { Input } from 'react-native-elements';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import { useEffect } from 'react'
import { auth } from '../firebase';
import HomeScreen from './HomeScreen';

import useAuth from '../hooks/useAuth';



const AuthStack = createNativeStackNavigator();

//Schema to send data for auth
export const loginSchema = yup.object().shape({
  email: yup
  .string()
  .email("Invalid Email Format")
  .required("Email is a Required Field"),
  password: yup.string().required("Password is a Required field"),
})
// Handle Error 
function  ErrorText  ({ name, errors}) {
  if (!errors) {
    return null
  }

  return (
    <View style={{paddingLeft: 8, color: "red"}}>
      {errors[name] && (
        <Text style={{color:'#d81010'}}>{errors?.[name]?.message}</Text>
      )}


    </View>
  );
};
//Receive and deploy error
const ErrorAlert = ({title, message}) =>
  Alert.alert(title, message, [
    {text: "OK", onPress: () => console.log("ok Pressed")}
  ])
//Condense setting data in state 
export  function LoginScreen({navigation}) {
  const{ signIn, loading } = useAuth()


  //stores form inputs
  const {
    register, 
    setValue, 
    getValues, 
    handleSubmit, 
    // control, 
    // reset, 
    formState:  {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: "",
    },
  });

  useEffect (() => {
      register("email");
      register("password");
  }, [] )



 async function doLogin (data) {
      const { email, password} = data
      
      
      try {
        await signIn(email, password)
        console.log("signed In!!!")
        // navigation.navigate('HomeTabs')
       
      }
      catch (error) {
        Alert.alert('Error Logging In', error.message);
      }
  }
  

  

  function onConfirmHandler() {
    // Confirm sign in 
    //navigate to home
    // navigation.navigate(HomeScreen)
    
  }
  function onPressSignUp () {
    navigation.navigate("SignUpScreen")
  }


  return (
    <View>
      <Text> Email</Text>
      <TextInput 
      id="email"
      textContentType='emailAddress'
      autoCapitalize='none'
      style={styles.input}
      onChangeText={(text)=> setValue("email", text)}      
      />
      
      <ErrorText name="email" errors={errors}> </ErrorText>
      <Text> Password</Text>
      <TextInput 
      id="password"
      textContentType='password'
      secureTextEntry={true}
      style={styles.input}
      autoCapitalize='none'
      onChangeText={(text)=> setValue("password", text)}
     
      
      />
      
      
      <ErrorText name="password" errors={errors}> </ErrorText>
      
      <View style={styles.buttonContainer}> 
      <Button  style={styles.button}onPress={handleSubmit(doLogin)} > Log In </Button>
     
      <Text  style={styles.buttonText}> Don't have an account? </Text>

      <Button style={styles.button} onPress={onPressSignUp} > Create Account </Button>

      </View>
    </View>
  )
}

export  function SignUpScreen({navigation}) {
  
    const createUser = (email, password) => {
      try {
        auth.createUserWithEmailAndPassword()
      } catch (error) {
        alert(error);
      }
    }
    // navigation.navigate("HomeScreen")
  
  function cancelCreate () {
    navigation.goBack();
  }
  return (
    <View>
      <Input label="Email"/>
      <Input label="Create Password"/>
      <Button onPress={createUser} > Confirm </Button>
      <Button mode={"flat"} onPress={cancelCreate} > Cancel </Button>
    </View>
  );
}






function AuthStackScreens() {
  return <AuthStack.Navigator > 
    <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    {/* navigate to profilecreate screen */}
 
  </AuthStack.Navigator>
}

export default AuthStackScreens

const styles = StyleSheet.create({
  buttonContainer : {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 70,
    marginVertical: 20,
  },
  button: {
      marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,

  },

  label: {
    fontSize: 16,
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#e0dfdf',
    padding: 6,
    borderRadius: 6,
    fontSize:18,
    
  },

})
