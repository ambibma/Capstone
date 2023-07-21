import { Pressable, StyleSheet, Text, View, Image, Platform, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import ProfileCardTitle from '../ProfileCardTitle'

export default function ProfileCard({ id, name, location, imageUrl, seeking }) {
  const navigation = useNavigation();
  
 function selectProfileHandler(){
    console.log('pressed')
    navigation.navigate('CardDetails',{
      profileId: id
    })    
  }
  
  return (
    <View style={styles.profileCard}>
      <Pressable android_ripple={{color: '#cccccc'}} 
        style = { ({pressed}) => 
          pressed ? styles.profilePressed : null}
        onPress={selectProfileHandler} 
      >
        <View style={styles.innerContainer}>
        <ImageBackground style={styles.profileImage}source={{uri: imageUrl}}>
        <ProfileCardTitle
          name={name}
          location={location}
          seeking={seeking}
          seekingHeader={"Seeking:"}
        />
        </ImageBackground>

        </View>
        {/* title card */}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    margin: 12,
    backgroundColor: 'white',
    padding: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: .35,
    shadowOffset: {width: 0, height: 2, },
    shadowRadius: 18,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems:'center'
    
  },
  profilePressed: {
    opacity: .5,
  },

  profileImage: {
    
    width: '100%',
    height: 450,
    
  }

})