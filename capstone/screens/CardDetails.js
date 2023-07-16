import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { PROFILES } from '../dummyData/dummy-data'
import React from 'react'
import ProfileCardTitle from '../components/ProfileCardTitle';


// id, 
// name,
// location,
// imageUrl
// genre,
// seeking,
// skills,
// goals,
// about,


export default function CardDetails({route, navigation}) {

  const profileId = route.params.profileId;
  const selectedProfile = PROFILES.find((profile) => profile.id === profileId)



  //May have to use useLayout effect to handle 'liking' someone's profile to add to user's likes.


  return (
    <ScrollView>

    <View>
      <Image source={{uri:selectedProfile.imageUrl}} style={styles.image}/>
      <ProfileCardTitle 
        name={selectedProfile.name}
        location={selectedProfile.location}
        seeking={selectedProfile.seeking}
        style={styles.titleStyle}
        />
    </View>
      <View>
        <Text>Genre: {selectedProfile.genre}</Text>
        <Text>Seeking: {selectedProfile.skills}</Text>
        <Text>Goals: {selectedProfile.goals}</Text>
        <Text>About: {selectedProfile.about}</Text>


      </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: 350,
  },
  titleStyle: {
    marginTop: 12,
    
  }


})