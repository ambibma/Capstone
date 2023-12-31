import { StyleSheet, Text, View } from 'react-native'


export default function ProfileCardTitle({profileName, location, seekingHeader, seeking, style, textStyle}) {
  return (
    <View style={[styles.details, style]}> 
     
        <Text style={[styles.detailItem, textStyle]}>{profileName}</Text>
        
        
        <Text style={[styles.detailItem, textStyle]}>{location}</Text>
        
        
        <Text style={[styles.detailItem, textStyle]}>{seekingHeader}  {seeking}</Text>
           
  </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'column',
    marginTop: 345,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 24,
    
    

  },
  detailItem: {
    marginHorizontal: 2,
    fontSize: 24,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 8,
    
  },
})