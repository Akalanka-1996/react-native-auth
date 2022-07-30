import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, {createContext, useState} from 'react'
import { BASE_URL } from '../config'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const register = (name, email, password) => {
       setIsLoading(true)

       axios.post(`http://192.168.43.10:8080/api/users/`, {
           name,
           email,
           password
       })
       .then(res => {
            let userInfo = res.data
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
            console.log(userInfo)
       })
       .catch(e => {
           console.log(`register error ${e}`)
           setIsLoading(false)
       })
    }

    const login = ( email, password) => {
        setIsLoading(true)
 
        axios.post(`http://192.168.43.10:8080/api/users/login`, {
            email,
            password
        })
        .then(res => {
             let userInfo = res.data
             console.log(userInfo)
             setUserInfo(userInfo)
             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
             setIsLoading(false)
             console.log(userInfo)
        })
        .catch(e => {
            console.log(`register error ${e}`)
            setIsLoading(false)
        })
     }

    return (
    <AuthContext.Provider 
        value={{
            isLoading,
            userInfo,
            register,
            login}}
        >
        {children}
    </AuthContext.Provider>

    )
}