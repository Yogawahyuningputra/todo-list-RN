import * as React from "react"
import { useState, useContext } from "react"
import { Box, Heading, Stack, FormControl, Text, Input, Badge, HStack, WarningIcon } from "native-base"
import { View, TouchableOpacity } from "react-native"
import { API } from "../config/api"
import { useQuery } from "react-query"
import { UserContext } from "../context/userContext"

export default function Category() {
    const [state, dispatch] = useContext(UserContext)
    const [category, setCategory] = useState({
        name: '',
    })

    const { data: Categories, refetch: categoryrefetch } = useQuery("CategoriesCaches", async () => {
        const response = await API.get("/Categories")
        return response.data
    })

    const handleOnChange = (name, value) => {
        setCategory({
            ...category, [name]: value,
        })
    }
    const handleOnSubmit = async () => {
        try {
            if (category.name.trim() == "") {
                return alert("name can't be empty")
            }
            const response = await API.post("/Categories", category)

            alert("Categories Success Added")

            categoryrefetch()

        } catch (error) {
            alert("Failed to Add")

        }
    }
    // const Data = Categories
    // const Datacategory = state?.data?.user?.categories
    // const filterCategory = Data?.filter(object => Datacategory?.includes(object._id))
    // // console.log("isi filter", Datacategory);

    return (

        <Box alignItems="center" justifyContent="center">
            <Stack>
                <Box alignItems="center">

                    <FormControl style={{ marginTop: 50 }}>
                        <Heading>Add Category</Heading>

                        <FormControl style={{ marginVertical: 30 }}>
                            <Input size="md" type="text" placeholder="Name" backgroundColor="lightgrey" value={category.name} onChangeText={(value) => handleOnChange("name", value)} />
                        </FormControl>

                    </FormControl>

                    <TouchableOpacity style={{ backgroundColor: "#FF5555", color: "white", paddingHorizontal: 120, paddingVertical: 10, borderRadius: 5 }} onPress={handleOnSubmit}>
                        <Text colorScheme="white">Add Category</Text>
                    </TouchableOpacity>
                </Box>
                <Heading style={{ marginTop: 30 }}>List Category</Heading>

            </Stack>
            <Stack style={{ marginTop: 10 }}>
                <Box >
                    <HStack space={{
                        base: 2,
                        sm: 4
                    }} mx={{
                        base: "auto",
                        md: 0
                    }} flexWrap={"wrap"} width="95%">
                        {Categories?.map((item, idx) => {
                            const random = Math.random();
                            let color;
                            if (random > 0.66) {
                                color = "red";
                            } else if (random > 0.33) {
                                color = "green";
                            } else {
                                color = "blue";
                            }
                            return (
                                <Badge colorScheme={color} style={{ borderRadius: 10, marginBottom: 5, width: 150, height: 50 }}>
                                    <Text>{item.name}</Text>
                                </Badge>
                            );
                        })}
                        {/* {Categories?.map((item, idx) => {
                            const red = Math.floor(Math.random() * 256);
                            const green = Math.floor(Math.random() * 256);
                            const blue = Math.floor(Math.random() * 256);
                            const color = `rgba(${red}, ${green}, ${blue}),1`;
                            return (
                                <Badge colorScheme={color}>
                                    <Text>{item.name}</Text>
                                </Badge>
                            );
                         })} */}
                    </HStack>

                </Box>

            </Stack>
        </Box >



    )
}
