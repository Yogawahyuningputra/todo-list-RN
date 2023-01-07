import React, { useState, useContext } from "react"
import { Box, Heading, Stack, FormControl, Text, Input, Image, Alert } from "native-base"
import { View, TouchableOpacity } from "react-native"
import { API } from "../config/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { showMessage, hideMessage } from 'react-native-flash-message'

// import { UserContext } from "./context/userContext"
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    // const [state, dispatch] = useContext(UserContext)
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: '',

    })

    console.log(dataLogin)
    const handleOnChange = (name, value) => {
        setDataLogin({
            ...dataLogin, [name]: value,
        })
    }

    const handleOnSubmit = async () => {
        try {

            const body = JSON.stringify(dataLogin)
            const response = await API.post('/auth/login', dataLogin)
            if (response?.status === 200) {

                await AsyncStorage.setItem("token", response.data.token)
                await AsyncStorage.setItem("user_id", response.data.user._id)
                await AsyncStorage.setItem("name", response.data.user.firstName)

                //     dispatch({
                //         type: "LOGIN_SUCCESS",
                //         payload: response.data

                //     })
            }
            const token = await AsyncStorage.getItem("token")
            if (token !== null) {
                navigation.navigate("listtodo")
                // alert("Login Successfull")
                showMessage({
                    message: "Login Successful", type: "info"
                })
            }
            console.log(response)

            alert("login success")
            setDataLogin({
                email: '',
                password: '',
            })
        } catch (error) {
            alert("login failed, sorry ")
            console.log(error)
        }


    }

    return (

        <Box flex={1} alignItems="center" justifyContent="center">
            <Stack>
                <Box alignItems="center">
                    <Image source={require("../../assets/LoginIcon.png")} alt="images" style={{ width: "70%" }} />
                </Box>

                <Box alignItems="center">

                    <FormControl style={{ marginVertical: 50 }} >
                        <FormControl  >
                            <Heading>Login</Heading>

                            <FormControl style={{ marginVertical: 10 }}>
                                <Input size="md" type="text" placeholder="Email" backgroundColor={999999} name="email" value={dataLogin.email} onChangeText={(value) => handleOnChange("email", value)} />
                            </FormControl>
                            <FormControl>
                                <Input size="md" type="text" placeholder="Password" backgroundColor={999999} name="password" value={dataLogin.password} onChangeText={(value) => handleOnChange("password", value)} />
                            </FormControl>
                        </FormControl>

                        <TouchableOpacity style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5 }} onPress={handleOnSubmit}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </FormControl>

                    <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
                        <Text>New User ? <Text onPress={() => navigation.navigate("register")}>Register</Text></Text>
                    </View>

                </Box>

            </Stack>
        </Box >



    )
}
