import { StyleSheet, Text, View, FlatList } from 'react-native'

import ProfileCard from './ProfileCard';
import { UsersContext } from '../../store/users-context';




export default function ProfileList({profiles}) {
  function renderProfileCard(itemData){ 
  
        return ( <ProfileCard {...itemData.item} />
    )
  }

  
  // if (!profiles || profiles.length === 0) {
  //   return (
  //     <View style={styles.noProfileContainer}>
  //       <Text style={styles.noProfileText}>No profiles found. Create a profile!</Text>
  //     </View>
  //   );
  // }
  
    
  return ( 
    <FlatList
    data={profiles.users}
    keyExtractor={(item) => item.id}
    renderItem={renderProfileCard}
    />
  )
}

const styles = StyleSheet.create({
  noProfileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProfileText: {
    fontSize: 16,
  },

})