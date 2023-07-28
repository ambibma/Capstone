 import { StyleSheet, Text, View } from 'react-native'
 import { createContext, useContext, useState } from 'react'
 import React from 'react'


 const AuthContext = createContext({})
 
 export function AuthProvider ({children})  {
  
   return (
     <AuthContext.Provider
      value={{
        user: "ambi"
      }}
     >
     {children}
      </AuthContext.Provider>
   )
 }
 
 export default function useAuth() {
  return useContext(AuthContext);
 }

 
 const styles = StyleSheet.create({})

