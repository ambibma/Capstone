import { Pressable, StyleSheet, Text, View, Image, Platform} from 'react-native'
import React from 'react'

export default function ProfileCard({ id, name, location, imageUrl, seeking }) {
  
  return (
    <View style={styles.profileCard}>
      <Pressable android_ripple={{color: '#cccc'}} 
        style = { ({pressed}) => 
          pressed ? styles.profilePressed : null}
        onPress={console.log("Pressed")} 
      >
        <Image src={{uri: imageUrl}}>
        </Image>
        {/* title card */}
        <View>
        
          <Text>{name}</Text>
          <Text>{location}</Text>
          <Text>{seeking}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    margin: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: .35,
    shadowOffset: {width: 0, height: 2, },
    shadowRadius: 18,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },

  profileImage: {
    flex: 1,
  }

})