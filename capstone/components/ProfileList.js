import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProfileCard from './ProfileCard';


export default function ProfileList({items}) {
  function renderProfileCard(itemData){
      const item = itemData.item;

      const profileItemProps = {
        
        id: item.id,
        name : item.id,
        location : item.location,
        imageUrl : item.imageUrl,
        genre : item.genre,
        seeking : item.seeking,
        skills : item.skills,
        goals : item.goals,
        about : item.about,
      };     
        return ( <ProfileCard {...profileItemProps} />
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