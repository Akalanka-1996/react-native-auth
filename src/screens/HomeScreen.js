import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const HomeScreen = () => {

  const {userInfo, isLoading, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{userInfo.name}</Text>
      <Button title='Logout' color="red" onPress={logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 18,
    marginBottom: 7
  }
})

export default HomeScreen