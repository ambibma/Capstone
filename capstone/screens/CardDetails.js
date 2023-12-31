import { StyleSheet, Text, View, Image, ScrollView, ImageBackground} from 'react-native'

import React, { useContext, useState, useEffect } from 'react'
import ProfileCardTitle from '../components/ProfileCardTitle';
import CardDetailsAbout from '../components/ProfileDetail/CardDetailsAbout';

import IconButton from '../components/IconButton'
import { UsersContext } from '../store/users-context';


export default function CardDetails({route, navigation}) {

  const [isLoading, setIsLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const usersCtx = useContext(UsersContext);
  const profileId = route.params?.profileId;

  useEffect(()=> {
      const fetchProfileData= async() => {
        try {
          const profile = usersCtx.users.users.find((profile)=> profile.id === profileId);
          setSelectedProfile(profile);
          setIsLoading(false);
        } catch(error) {
          console.error('Error Fetching profile data', error.message);
          setIsLoading(false);
        }
      };
      fetchProfileData()
  }, [profileId, usersCtx.users])

  // const selectedProfile = usersCtx.users.find((profile) => profile.id === profileId)

  
  
  //May have to use useLayout effect to handle 'liking' someone's profile to add to user's likes.
  
  function HandleLike() {
    console.log("Like!")
  }
  function HandleDislike () {
    console.log("Dislike >:(")
  }
  if (isLoading || !selectedProfile) {
    return <Text>Loading...</Text>; 
  }
  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.imageContainer}>      
      <ImageBackground source={{uri:selectedProfile.imageUrl}} style={styles.image}>  
      <ProfileCardTitle
        profileName={selectedProfile.profileName}
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
          inspirationHeader={"Inspiration"}
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