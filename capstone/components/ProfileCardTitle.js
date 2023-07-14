import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileCardTitle({name, location, seeking}) {
  return (
    <View style={styles.details}>        
    <Text style={styles.detailItem}>{name}</Text>
    <Text style={styles.detailItem}>{location}</Text>
    <Text style={styles.detailItem}>Seeking: {seeking}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    padding: 24,

  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }


})