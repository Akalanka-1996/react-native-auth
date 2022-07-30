import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, {useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const val = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
          style={styles.input} 
          value={email}
          placeholder="Enter Email" 
          onChangeText={text => setEmail(text)}
        />
        <TextInput 
          style={styles.input} 
          value={password}
          placeholder="Enter Password" 
          secureTextEntry 
          onChangeText={text => setPassword(text)}
        />
        <Button 
          title="Login" 
        
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14
  },
  link: {
    color: 'blue'
  }
});

export default LoginScreen;
