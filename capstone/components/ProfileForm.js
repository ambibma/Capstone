import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Input from './Input'
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

export default function ProfileForm() {
  //onChangeText Function() {

  // }

  return (
    <ScrollView>      
      {/* upload Image tbd */}
      {/* Location API */}
      <Input label="Name" textInputConfig={{
          // onChangeText: Function
          placeholder: 'Enter a name'
      }}/>
      <Input label="Location" textInputConfig={{
          placeholder: 'enter your city'
      }}/>
      <Input label="Inspiration" textInputConfig={{
        placeholder: 'What music inspires you'
      }}/>
      {/* Genre may have to be a drop down list to make comparing algorthim easier to match */}
      <Input label="Genre" textInputConfig={{
        placeholder: 'Genres you like?'
      }}/>
      <Input label="Seeking" textInputConfig={{
        placeholder: "What are you seeking?"
      }}/>
      <Input label="Skills" textInputConfig={{
        placeholder: 'What instruments do you play?'
      }}/>
      <Input label="Goals" textInputConfig={{
        placeholder: 'What are you hoping to do?'
      }}/>
      <Input label="About You" textInputConfig={{
        placeholder: "Enter a little about yourself",
        multiline: true,
        
      }}/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({})