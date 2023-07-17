import { StyleSheet, Text, View, Image, ScrollView, ImageBackground} from 'react-native'
import { PROFILES } from '../dummyData/dummy-data'
import React from 'react'
import ProfileCardTitle from '../components/ProfileCardTitle';
import CardDetailsAbout from '../components/CardDetailsAbout';

import IconButton from '../components/IconButton'

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
  
  function HandleLike() {
    console.log("Like!")
  }
  function HandleDislike () {
    console.log("Dislike >:(")
  }

  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.imageContainer}>      
      <ImageBackground source={{uri:selectedProfile.imageUrl}} style={styles.image}>  
      <ProfileCardTitle
        name={selectedProfile.name}
        location={selectedProfile.location}        
        style={styles.titleContainer}
        textStyle={styles.titleText}
      />
        </ImageBackground>
    </View>
      <View style={styles.aboutRootContainer}>
        <CardDetailsAbout 
          genreHeader={"Genre"}
          genre={selectedProfile.genre}
          inspirationHeader={"Inpsiration"}
          inspiration={selectedProfile.inspiration}
          skillsHeader={"Skills"}
          skills={selectedProfile.skills}
          goalsHeader={"Goals"}
          goals={selectedProfile.goals}
          aboutHeader={"About"}
          about={selectedProfile.about}

          containerStyle= {styles.aboutContainer}
          headerStyle={styles.aboutHeader}
          subTextStyle={styles.aboutText}
        />
        <View style={styles.buttonContainer}>
        <IconButton icon={"close-circle"} color={'#dd4e4e'} size={86} onPress={HandleDislike}> </IconButton>
        <IconButton icon={"checkmark-circle"} color={'#61da61'} size={86} onPress={HandleLike}> </IconButton>

        </View>
      </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({

  rootContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    flex:1,

  },

  image: {
    width: "100%",
    height: 400,
  },
  titleContainer: {
    
    flexDirection: 'column',
    marginTop: 275,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 2 ,
    
  },
  titleText: {
    marginHorizontal: 6,
    fontSize: 36,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 8,
    
  },
  aboutRootContainer: {
    padding: 8,
    
  },
  aboutContainer: {

  },
  aboutHeader : { 
   fontWeight: 'bold',
   fontSize: 24,
   marginBottom: 6,

  },
  aboutText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'stretch',
   paddingTop: 12,
   marginHorizontal: 40
   
  }


})