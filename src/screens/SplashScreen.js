import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'red'}}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )
}

export default SplashScreen