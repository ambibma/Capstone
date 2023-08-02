import { createContext, useEffect, useMemo } from "react";
import { useReducer } from "react";
import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, getDocs, getDoc, setDoc} from "firebase/firestore";
import useAuth from "../hooks/useAuth";


// export const PROFILES = [

//   {
//     //id
//    id:  "1",
//     //name
//    profileName: "Natalie Cole",
//     //location
//    location: "Portland, Oregon",
//     //imageUrl
//    imageUrl: "https://images.unsplash.com/photo-1495924979005-79104481a52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//     //genre
//     genre: "Punk, Rock, Experimental",
//     //inspiration
//   inspiration:  "Pixies, Cure, Nirvana ",
//     //seeking
//    seeking: "Hardcore Band",
//     //skills
//    skills:  "Bass,Guitar,Ableton",
//     //goals
//    goals: "Record a Demo",
//     //about
//    about: "I have been playing for 20 years, never started a band want to make a scene!",

//   },

 
//   {
//     id: "2",
//     profileName: "Tyler Adams",
//     location: "Portland, Oregon",
//     imageUrl: "https://images.unsplash.com/photo-1596334861142-48f19282fcba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
//     genre:  "Blues, Rock, SpeedCore",
//     inspiration: "Bad Brains, Doom, Minor Threat ",
//     seeking: "Drummer, bassist, vocals",
//     skills:  "Guitar",
//     goals: "Create a speedcore jazzband",
//     about : "I am literally the best guitarist ever.",
  
    
   
    
    
   
    
//   },
  
//   {
//     id : "3",
//     profileName: "Joan Jett",
//     location: "Portland, Oregon",
//     imageUrl: "https://images.unsplash.com/photo-1553197470-4241cfa0c7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     genre: "Rock",
//      //inspiration
//     inspiration: "RollingStones, FleetWood Mac, Rainbow ",
//     seeking: "Just looking to jam",
//     skills: "Vocals",
//     goals: "Idk",
//     about: "Been around, man.",   
//   }
  
// ]
const initialState = {users: [],};

export const UsersContext = createContext({
  users: [],
  addUserProfile: ( profileData) => {},
  updateUser: ( profileData) => {},
  deleteUser: (userId) => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case 'ADD_PROFILE':
        // generate random id from 1-1000
      // const id= Math.floor(Math.random() * 1000).toString();
      
      return { ...state, users: [...state.users, action.payload] }
    case 'UPDATE_PROFILE':
      return  {
        ...state,
        users: state.users.map((user) =>
          user.userId === action.payload.userId ? { ...user, ...action.payload } : user
        ),
      };
      
      case 'SET_PROFILES':
        return { ...state, users: action.payload};
      // const updatableUserIndex = state.findIndex(
      //   (user) => user.id === action.payload.id
      //   );
      //   const updatableUser = state[updatableUserIndex];
      //   const updatedItem = {...updatableUser, ...action.payload.data};
      //   const updatedUsers = [...state];
      //   updatedUsers[updatableUserIndex] = updatedItem;
        // return updatedUsers; 
    case 'DELETE':
      return state.filter((user)=> user.id !== action.payload);

    default: 
      return state;
  }
}

function UsersContextProvider({children}) {
 const [usersState, dispatch] = useReducer(userReducer, initialState );
 const {user } = useAuth();
//  console.log(user.uid)

 useEffect(() => {
  const fetchUserProfiles = async () => {
    if(user&& user?.uid) {
    const userProfilesRef = collection(db, 'userProfiles');
    const snapshot = await getDocs(userProfilesRef);
    //
    const profiles = snapshot.docs
    .filter((doc) => doc.id !== user.uid)
    .map((doc) => ({...doc.data(), id: doc.id}));
    console.log('Fetched profiles:', profiles);
    dispatch({type: 'SET_PROFILES', payload: profiles});
  }
  };
    fetchUserProfiles();
}, [user]);

  async function addUserProfile(userId, profileData){
    
    console.log("ADD USER", user.userId, profileData)
    try {
      const profileRef = doc(db, 'userProfiles',userId);
      // const docRef= doc(profileRef, userId);
      await setDoc(profileRef, { userId: user.uid, ...profileData });
      dispatch ({type: 'ADD_PROFILE', payload: {userId: user.uid, ...profileData } });
    } catch (error) {
      console.error('Error Adding Profile', error.message)
    }
  }
  async function updateUserProfile (userId, profileData){
   
    console.log("UPDATE USER", profileData)
    try {
      const profileDocRef = doc(db, `userProfiles`, user.uid);
      const docSnapshot = await getDoc(profileDocRef);
      if (docSnapshot.exists()){
        await updateDoc(profileDocRef,{...profileData});
        dispatch ({type: 'UPDATE_PROFILE',payload: {...profileData }});
      } else {
        await setDoc(profileDocRef, { userId: user.uid, ...profileData });
        dispatch ({type: 'ADD_PROFILE', payload: {userId: user.uid, ...profileData } });
      }
    } catch (error) {
      console.error('Error Updating user profile', error.message);
    }
  }
//  function addUser(userData) {
//   dispatch({type: 'ADD', payload: userData});

//  }
//  function updateUser(id, userData) {
//   dispatch ({type: 'UPDATE', payload: {id: id, data: userData}})
//  }
 function deleteUser(id) {
  dispatch ({type: 'DELETE', payload: id})
 }
 const memoedValue = useMemo(() => { 
  console.log ("USERS STATE", usersState)
  return {
    users: usersState,
    addUserProfile,
    updateUserProfile,
    deleteUser,  
 }
}, [usersState]);

  return <UsersContext.Provider value={memoedValue}>
    {children}
    </UsersContext.Provider>
}

export default UsersContextProvider;