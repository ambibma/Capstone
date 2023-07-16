import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

export default function CardDetailsAbout({genreHeader, genre, inspirationHeader, inspiration, skillsHeader, skills, goalsHeader, goals, aboutHeader, about, headerStyle, subTextStyle, containerStyle}) {
  return (
    <View style={containerStyle}>
      <Text style={headerStyle}>{genreHeader}</Text><Text style={subTextStyle}>{genre}</Text>
      
      <Text style={headerStyle}>{inspirationHeader}</Text><Text style={subTextStyle}>{inspiration}</Text>        
       
       <Text style={headerStyle}>{skillsHeader}</Text><Text style={subTextStyle}>{skills}</Text> 
       
       <Text style={headerStyle}>{goalsHeader}</Text><Text style={subTextStyle}>{goals}</Text>  
       
       <Text style={headerStyle}>{aboutHeader}</Text><Text style={subTextStyle}>{about}</Text>        
       </View>
  
    
  )
}
// put styles into an array if cascading styles are needed
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // header: { 
  //   fontSize: 18,
  //   color: 'black',
  //   fontWeight: 'bold'
  // },
  // subText: {
  //   fontSize: 12,
  //   color: 'black',
  // }

})