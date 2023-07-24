import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import { useState } from 'react'
import Button from './Button';
// id, 
// name,
// location,
// imageUrl
//inspiration
// genre,
// seeking,
// skills,
// goals,
// about,

export default function ProfileForm({onCancel, onSubmit}) {
  //if upload pictures, or take pictures becomes a thing either URL location goes here? Or the actual file does too?
  //If demo.wav/.mp3 becomes a thing will the API or file location live here too?
  const [ inputValues, setInputValues] = useState({
    profileName: '',
    location: '',
    imageUrl: '',
    inspiration: '',
    genre: '',
    seeking: '',
    skills: '',
    goals: '',
    about: '',

  });

  function inputChangedHandler( inputIdentifier, enteredValue) {
    //update state based on prev. state
    setInputValues((curInputValues)=>{
      return {
        ...curInputValues,
        [inputIdentifier] : enteredValue
      }
    });
  }

  function submitHandler() {
    const profileData = {
      profileName: inputValues.profileName,
      location: inputValues.location,
      imageUrl: '',
      inspiration: inputValues.inspiration,
      genre: inputValues.genre,
      seeking: inputValues.seeking,
      skills: inputValues.skills,
      goals: inputValues.goals,
      about: inputValues.about,
      

    };
    console.log(profileData);
    onSubmit(profileData);
  }

  //onChangeText Function() {

  // }

  return (
    <ScrollView> 
      <Text style={styles.title}>Edit Your Profile</Text>     
      {/* upload Image tbd */}
      {/* Location API */}
      <View style={styles.inputsRow}>
      <Input 
      label="Name" 
      textInputConfig={{
        placeholder: 'Enter a name',
        onChangeText: inputChangedHandler.bind(this, 'profileName'),
        value: setInputValues.profileName,
      }}/>
      <Input label="Location" textInputConfig={{
          placeholder: 'enter your city',
          onChangeText: inputChangedHandler.bind(this, 'location'),
        value: setInputValues.location,
      }}/>
      </View>
      <Input label="Inspiration" textInputConfig={{
        placeholder: 'What music inspires you',
        onChangeText: inputChangedHandler.bind(this, 'inspiration'),
        value: setInputValues.inspiration,
      }}/>
      {/* Genre may have to be a drop down list to make comparing algorthim easier to match */}
      <Input label="Genre" textInputConfig={{
        placeholder: 'Genres you like?',
        onChangeText: inputChangedHandler.bind(this, 'genre'),
        value: setInputValues.genre,
      }}/>
      <Input label="Seeking" textInputConfig={{
        placeholder: "What are you seeking?",
        onChangeText: inputChangedHandler.bind(this, 'seeking'),
        value: setInputValues.seeking,
      }}/>
      <Input label="Skills" textInputConfig={{
        placeholder: 'What instruments do you play?',
        onChangeText: inputChangedHandler.bind(this, 'skills'),
        value: setInputValues.skills,
      }}/>
      <Input label="Goals" textInputConfig={{
        placeholder: 'What are you hoping to do?',
        onChangeText: inputChangedHandler.bind(this, 'goals'),
        value: setInputValues.goals,
      }}/>
      <Input label="About You" textInputConfig={{
        placeholder: "Enter a little about yourself",
        onChangeText: inputChangedHandler.bind(this, 'about'),
        value: setInputValues.about,
        multiline: true,
        
      }}/>
      <View style={styles.buttonContainer}>
      <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
      <Button style={styles.button} onPress={submitHandler}>Save</Button>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 24,
      textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
   justifyContent: 'center',   
   alignItems: 'center',
   padding: 8,
   marginHorizontal: 40 ,  
  
  },
  button: {
    flex: 1,
    minWidth: 120,
    marginHorizontal: 8,  
   
  },


})