import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'
import {REACT_NATIVE_SUPABASE_ANON_KEY,  REACT_NATIVE_SUPABASE_URL} from '@env'
import {AsyncStorage} from '@react-native-async-storage/async-storage'

// const ExpoSecureStoreAdapter = {
//   getItem: (key) => {
//     return SecureStore.getItemAsync(key)
//   },
//   setItem: (key,  value) => {
//     SecureStore.setItemAsync(key, value)
//   },
//   removeItem: (key) => {
//     SecureStore.deleteItemAsync(key)
//   },
// }
  console.log(REACT_NATIVE_SUPABASE_URL)

 const supabaseUrl = REACT_NATIVE_SUPABASE_URL
const supabaseAnonKey = REACT_NATIVE_SUPABASE_ANON_KEY

 const { supabase } = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
 
});

export {supabase}