import React, { useState, useContext } from "react"
import { useMutation } from "react-query"
import { Box, Heading, Stack, FormControl, Text, Input, Image } from "native-base"
import { View, TouchableOpacity } from "react-native"
import { API } from "../config/api"
import { showMessage } from 'react-native-flash-message'
import { UserContext } from "../context/userContext"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login({ navigation }) {

    const [state, dispatch] = useContext(UserContext)
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",
    })

    function handleOnChange(name, value) {
        setDataLogin({
            ...dataLogin,
            [name]: value,
        })
    }
    console.log(dataLogin)
    const handleOnSubmit = useMutation(async (e) => {
        try {
            const response = await API.post("/auth/login", dataLogin)
            AsyncStorage.setItem("token", response.data.token)
            const payload = response.data
            showMessage({
                message: "Login Success!",
                type: "success",
            })
            dispatch({
                type: "LOGIN_SUCCESS",
                payload,
            })
            setAuthorization(response.data.token)
            alert("Login Successfull")
            navigation.navigate("listtodo")
        } catch (err) {
            console.log("Wrong  Email Or Password", err)
            showMessage({
                message: " Wrong  Email Or Password ",
                type: "danger",
            })
        }
    })
    return (

        <Box flex={1} alignItems="center" justifyContent="center">
            <Stack>
                <Box alignItems="center">
                    <Image source={require("../../assets/LoginIcon.png")} alt="images" style={{ width: "70%" }} />
                </Box>

                <Box alignItems="center">

                    <FormControl style={{ marginVertical: 40 }} >
                        <FormControl  >
                            <Heading>Login</Heading>

                            <FormControl style={{ marginVertical: 10 }}>
                                <Input size="md" type="text" placeholder="Email" name="email" onChangeText={(value) => handleOnChange("email", value)} backgroundColor="lightgrey" />
                            </FormControl>
                            <FormControl>
                                <Input size="md" type="text" secureTextEntry={true} placeholder="Password" name="password" onChangeText={(value) => handleOnChange("password", value)} backgroundColor="lightgrey" />
                            </FormControl>
                        </FormControl>


                    </FormControl>
                    <TouchableOpacity style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5 }}
                        onPress={() => handleOnSubmit.mutate()}
                    >
                        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
                        <Text>New User ? <Text onPress={() => navigation.navigate("register")}>Register</Text></Text>
                    </View>

                </Box>

            </Stack>
        </Box >



    )
}
