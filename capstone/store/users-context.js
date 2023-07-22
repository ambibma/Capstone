import { createContext } from "react";
import { useReducer } from "react";


export const PROFILES = [
  {
    //id
   id:  "1",
    //name
   profileName: "Natalie Cole",
    //location
   location: "Portland, Oregon",
    //imageUrl
   imageUrl: "https://images.unsplash.com/photo-1495924979005-79104481a52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    //genre
    genre: "Punk, Rock, Experimental",
    //inspiration
  inspiration:  "Pixies, Cure, Nirvana ",
    //seeking
   seeking: "Hardcore Band",
    //skills
   skills:  "Bass,Guitar,Ableton",
    //goals
   goals: "Record a Demo",
    //about
   about: "I have been playing for 20 years, never started a band want to make a scene!"    
  },

 
  {
    id: "2",
    profileName: "Tyler Adams",
    location: "Portland, Oregon",
    imageUrl: "https://images.unsplash.com/photo-1596334861142-48f19282fcba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    genre:  "Blues, Rock, SpeedCore",
    inspiration: "Bad Brains, Doom, Minor Threat ",
    seeking: "Drummer, bassist, vocals",
    skills:  "Guitar",
    goals: "Create a speedcore jazzband",
    about : "I am literally the best guitarist ever."
   
    
   
    
    
   
    
  },
  
  {
    id : "3",
    profileName: "Joan Jett",
    location: "Portland, Oregon",
    imageUrl: "https://images.unsplash.com/photo-1553197470-4241cfa0c7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    genre: "Rock",
     //inspiration
    inspiration: "RollingStones, FleetWood Mac, Rainbow ",
    seeking: "Just looking to jam",
    skills: "Vocals",
    goals: "Idk",
    about: "Been around, man.",   
  }
  
]

export const UsersContext = createContext({
  users: [],
  addUser: ({profileName, location, imageUrl, genre, seeking, skills, goals, about  }) => {},
  deleteUser: (id) => {},
  updateUser: (id, {profileName, location, imageUrl, genre, seeking, skills, goals, about} ) => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case 'ADD':
        //generate random id from 1-1000
      const id= Math.floor(Math.random() * 1000).toString();
      return [{...action.payload, id: id}, ...state]
    case 'UPDATE':

      const updatableUserIndex = state.findIndex(
        (user) => user.id === action.payload.id
        );
        const updatableUser = state[updatableUserIndex];
        const updatedItem = {...updatableUser, ...action.payload.data};
        const updatedUsers = [...state];
        updatedUsers[updatableUserIndex] = updatedItem;
        return updatedUsers; 
    case 'DELETE':
      return state.filter((user)=> user.id !== action.payload);

    default: 
      return state;
  }
}

function UsersContextProvider({children}) {
 const [usersState, dispatch] = useReducer(userReducer, PROFILES );

 function addUser(userData) {
  dispatch({type: 'ADD', payload: userData});

 }
 function updateUser(id, userData) {
  dispatch ({type: 'UPDATE', payload: {id: id, data: userData}})
 }
 function deleteUser(id) {
  dispatch ({type: 'DELETE', payload: id})
 }
 const value = {
    users: usersState,
    addUser: addUser,
    deleteUser: deleteUser,
    updateUser: updateUser,

 };

  return <UsersContext.Provider value={value}>
    {children}
    </UsersContext.Provider>
}

export default UsersContextProvider;