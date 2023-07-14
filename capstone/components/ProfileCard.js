import { Pressable, StyleSheet, Text, View, Image, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Profile from '../models/profile'
import ProfileCardTitle from './ProfileCardTitle'

export default function ProfileCard({ id, name, location, imageUrl, seeking }) {
  // const navigation = useNavigation();
  
 function selectProfileHandler(){
    console.log('pressed')
    // navigation.navigate('ProfileDetailsScreen',{
    //   profileId: id
    // })    
  }
  
  return (
    <View style={styles.profileCard}>
      <Pressable android_ripple={{color: '#cccc'}} 
        style = { ({pressed}) => 
          pressed ? styles.profilePressed : null}
        onPress={selectProfileHandler} 
      >
        <View style={styles.innerContainer}>
        <Image style={styles.profileImage}source={{uri: imageUrl}}>
        </Image>

        </View>
        <ProfileCardTitle
          name={name}
          location={location}
          seeking={seeking} 
        />
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
    
  },

  profileImage: {
    
    width: '100%',
    height: 300,
    
  }

})