 import { StyleSheet, Text, View } from 'react-native'
 import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, User } from 'firebase/auth';
 import { auth } from '../firebase';



 const AuthContext = createContext({})  
 
 
 export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true)

  //implicitly returns an unsubscribe
  useEffect(
    () => 
    onAuthStateChanged(auth, (user) => {      
    if(user) {
        //logged in
        setUser(user);
        

      } else {

        setUser(null)
      }
      setLoading(false)
      setLoadingInitial(false)
      
        }),
      []
    );
    
    const logOut = () => {
      setLoading(true);
      auth.signOut(auth).catch((error) => setError(error)).finally(() =>setLoading(false))
    }
    
    const signIn = async(userEmail, userPassword) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword );
        setUser(userCredential.user);       
       
      }
      catch (error) {
        console.error('error Signing in ', error.message);
      }
    }  
    const memoedValue = useMemo(() => ({
      user, 
      loading,       
      signIn,
      logOut
    }), [user, loading, error ] )

  
    
   return (
     <AuthContext.Provider
      value={memoedValue}
     >
     {!loadingInitial && children}
      </AuthContext.Provider>
   )
 }
 
 export default function useAuth() {

 
  return useContext(AuthContext);
  
 }

 
 const styles = StyleSheet.create({})
