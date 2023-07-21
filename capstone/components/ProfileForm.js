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
      <Text style={styles.title}>Edit Your Profile</Text>     
      {/* upload Image tbd */}
      {/* Location API */}
      <View style={styles.inputsRow}>
      <Input label="Name" textInputConfig={{
          // onChangeText: Function
          placeholder: 'Enter a name'
      }}/>
      <Input label="Location" textInputConfig={{
          placeholder: 'enter your city'
      }}/>
      </View>
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
  }


})