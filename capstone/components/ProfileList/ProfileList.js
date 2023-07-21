import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import ProfileCard from './ProfileCard';
import { UsersContext } from '../../store/users-context';


export default function ProfileList({items}) {
  

  function renderProfileCard(itemData){
      
        return ( <ProfileCard {...itemData.item} />
    )
  }
  return ( <View>
    <FlatList
    data={items}
    keyExtractor={(item) => item.id}
    renderItem= {renderProfileCard}    
    />


    

  </View>)
}

const styles = StyleSheet.create({})