import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LogInScreen = () => {
  const { user } = useAuth();
 
  return (
    <View>
      <Text>LogInScreen</Text>
    </View>
  )
}

export default LogInScreen

const styles = StyleSheet.create({})