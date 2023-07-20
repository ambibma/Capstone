import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import ProfileCard from './ProfileCard';
import { UsersContext } from '../../store/users-context';


export default function ProfileList({items}) {
  

  function renderProfileCard(itemData){
      // const item = itemData.item;

      // const profileItemProps = {
        
      //   id: item.id,
      //   name : item.name,
      //   location : item.location,
      //   imageUrl : item.imageUrl,
      //   genre : item.genre,
      //   seeking : item.seeking,
      //   skills : item.skills,
      //   goals : item.goals,
      //   about : item.about,
      // };     
        return ( <ProfileCard {...itemData.item} />
    )
  }
  return ( <View>
    <FlatList
    data={users}
    keyExtractor={(item) => item.id}
    renderItem= {renderProfileCard}    
    />


    

  </View>)
}

const styles = StyleSheet.create({})