import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './input'
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
  return (
    <View>      
      {/* upload Image tbd */}
      {/* Location API */}
      <Input label="Name"/>
      <Input label="Location"/>
      <Input label="Inspiration"/>
      <Input label="Genre"/>
      <Input label="Seeking"/>
      <Input label="Skills"/>
      <Input label="Goals"/>
      <Input label="About You"/>

    </View>
  )
}

const styles = StyleSheet.create({})