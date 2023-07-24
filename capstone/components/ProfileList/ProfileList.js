import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import ProfileCard from './ProfileCard';
import { UsersContext } from '../../store/users-context';



function renderProfileCard(itemData){
    
      return ( <ProfileCard {...itemData.item} />
  )
}

export default function ProfileList({profiles}) {
  return ( <View>
    <FlatList
    data={profiles}
    keyExtractor={(item) => item.id}
    renderItem= {renderProfileCard}    
    />


    

  </View>)
}

const styles = StyleSheet.create({})