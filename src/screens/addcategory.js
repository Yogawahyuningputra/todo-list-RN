import * as React from "react"
import { useState } from "react"
import { Box, Heading, Stack, FormControl, Text, Input, Badge, HStack } from "native-base"
import { View, TouchableOpacity } from "react-native"
import { API } from "../config/api"
export default function Category() {
    const [category, setCategory] = useState({
        name: '',
    })

    const handleOnChange = (name, value) => {
        setCategory({
            ...category, [name]: value,
        })
    }
    console.log(category)
    const handleOnSubmit = async () => {
        try {
            // const body = JSON.stringify(category)
            const response = await API.post("Categories", category)
            alert("Categories Success Added")
        } catch (error) {
            alert("Failed nih")

        }
    }

    return (

        <Box alignItems="center" justifyContent="center">
            <Stack>
                <Box alignItems="center">

                    <FormControl style={{ marginTop: 50 }}>
                        <Heading>Add Category</Heading>

                        <FormControl style={{ marginVertical: 30 }}>
                            <Input size="md" type="text" placeholder="Name" backgroundColor={999999} value={category.name} onChangeText={(value) => handleOnChange("name", value)} />
                        </FormControl>

                    </FormControl>

                    <TouchableOpacity style={{ backgroundColor: "#FF5555", color: "white", paddingHorizontal: 120, paddingVertical: 10, borderRadius: 5 }} onPress={handleOnSubmit}>
                        <Text>Add Category</Text>
                    </TouchableOpacity>
                </Box>

            </Stack>
            <Stack style={{ marginRight: 100, marginTop: 20 }}>
                <Box >
                    <Heading style={{ marginBottom: 10 }}>List Category</Heading>

                    <HStack space={{
                        base: 2,
                        sm: 4
                    }} mx={{
                        base: "auto",
                        md: 0
                    }}>
                        <Badge colorScheme="danger">Study</Badge>
                        <Badge colorScheme="info">Home Work</Badge>
                        <Badge colorScheme="coolGray">Workout</Badge>
                    </HStack>

                </Box>

            </Stack>
        </Box >



    )
}
