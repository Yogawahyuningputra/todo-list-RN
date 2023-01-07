import * as React from "react"
import { useState } from "react"
import { Box, Heading, Image, Stack, FormControl, Text, Input, View } from "native-base"
import { TouchableOpacity } from "react-native"
import { API } from "../config/api"
import { showMessage, hideMessage } from 'react-native-flash-message'

export default function Register({ navigation }) {
    const [register, setRegister] = useState({
        firstName: '',
        email: '',
        password: '',


    })
    // console.log(register)
    const handleOnChange = (name, value) => {
        setRegister({
            ...register,
            [name]: value,
        })

    }

    const handleOnSubmit = async () => {
        try {

            const body = JSON.stringify(register)

            const response = await API.post("/auth/register", body, { validateStatus: () => true })
            // console.log(response.data)
            alert("Register Successfull")
            showMessage({
                message: "Register Successful", type: "info"
            })
            navigation.navigate("login")
        } catch (error) {
            alert("Register Failed")

            return showMessage({
                message: "Register failed", description: `${response.data.message}`, type: "danger"
            })

        }
    }

    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <Stack>
                <Box alignItems="center">
                    <Image source={require("../../assets/LoginIcon.png")} alt="images" style={{ width: "70%" }} />
                </Box>

                <Box alignItems="center">

                    <FormControl style={{ marginVertical: 40 }}>
                        <Heading>Register</Heading>

                        <FormControl style={{ marginVertical: 10 }}>
                            <Input size="md" type="text" placeholder="Fullname" name="firstName" backgroundColor={999999} value={register.firstName} onChangeText={(value) => handleOnChange("firstName", value)} />
                        </FormControl>
                        <FormControl style={{ marginBottom: 10 }}>
                            <Input size="md" type="email" placeholder="Email" name="email" backgroundColor={999999} value={register.email} onChangeText={(value) => handleOnChange("email", value)} />
                        </FormControl>
                        <FormControl>
                            <Input size="md" type="password" placeholder="Password" name="password" backgroundColor={999999} value={register.password} onChangeText={(value) => handleOnChange("password", value)} />
                        </FormControl>

                        <TouchableOpacity style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5, marginTop: 25 }} onPress={handleOnSubmit}>
                            <Text>Register</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
                            <Text>Joined us befored ? <Text onPress={() => navigation.navigate("login")}>Login</Text></Text>
                        </View>
                    </FormControl>

                </Box>

            </Stack>
        </Box >

    )
}
