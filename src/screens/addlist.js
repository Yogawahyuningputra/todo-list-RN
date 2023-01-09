import * as React from "react"
import { useState, useContext } from 'react'
import { Box, Heading, HStack, Stack, FormControl, CheckIcon, Text, Input, Pressable, Select, TextArea } from "native-base"
import { TouchableOpacity } from "react-native"
import { useQuery } from "react-query"
import { API } from "../config/api"
import { showMessage } from "react-native-flash-message"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from "../context/userContext"

export default function AddList() {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState("date")
    const [show, setShow] = useState(false)
    const [text, setText] = useState("Choose date")

    const ChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
        let tempDate = new Date(currentDate)
        let formatDate = tempDate.getDate() + " / " + (tempDate.getMonth() + 1) + " / " + tempDate.getFullYear()
        setText(formatDate)
    }
    const showMode = (currentDate) => {
        setShow(true)
        setMode(currentDate)
    }


    const [state, dispatch] = useContext(UserContext)
    const [addList, setAddList] = useState({
        name: '',
        category: '',
        description: '',
        date: '',
    })
    console.log(addList)

    const { data: listCategory } = useQuery("ListCaches", async () => {
        const response = await API.get("/Categories")
        return response.data
    })

    const handleOnChange = (name, value) => {
        setAddList({
            ...addList, [name]: value,
        })
    }

    const handleOnSubmit = async () => {
        try {
            const addData = {
                name: addList.name,
                category: addList.category,
                date: date,
                description: addList.description,
                Users: [state?.data?.user?._id],
                // status: 0
            }
            if (addList.name.trim() == "") {
                return alert("name can't be empty")
            }

            if (addList.description.trim() == "") {
                return alert("description can't be empty")
            }
            const response = await API.post("/todos", addData)
            console.log("isi data list", addData)

            showMessage({
                message: "Add List Successfull!",
                type: "success",
            })
            alert("Add List Successfull!")
            setAddList({
                name: '',
                category: '',
                date: '',
                description: '',
            })

        } catch (error) {

            console.log(error)
        }

    }

    return (
        <Box alignItems="center" justifyContent="center" marginTop="10">
            <Stack>

                <Box alignItems="center">

                    <FormControl style={{ marginVertical: 10 }}>
                        <Heading>Add List</Heading>

                        <FormControl style={{ marginVertical: 20 }}>
                            <Input size="md" type="text" placeholder="name" backgroundColor="lightgrey" borderWidth={2} value={addList.name} onChangeText={(value) => handleOnChange("name", value)} />
                        </FormControl>
                        <Select backgroundColor="lightgrey" borderWidth={2} placeholder=" category"
                            defaultValue={addList.category}
                            onValueChange={(value) => handleOnChange("category", [value])}
                            minWidth="300" accessibilityLabel="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1}>
                            {listCategory?.map((item, i) => (
                                < Select.Item label={item.name} value={item._id} key={i} />

                            ))}
                        </Select>
                        <Pressable p={3} h={46} mt={3} bg="lightgrey" fontSize={12}
                            // borderWidth={2}
                            borderRadius={5}
                            borderColor="muted.400"
                            title="DatePicker"
                            onPress={() => showMode("date")}
                        >
                            <HStack justifyContent="space-between">
                                <Text fontSize={12}>
                                    {text}
                                </Text>
                                <Text color="blueGray.400">
                                    <Ionicons name="calendar-outline" size={25} />
                                </Text>
                            </HStack>
                        </Pressable>

                        <FormControl marginTop={4}>
                            <TextArea size="md" type="textarea" placeholder="Description" backgroundColor="lightgrey" borderWidth={2} value={addList.description} onChangeText={(value) => handleOnChange("description", value)} />
                        </FormControl>
                    </FormControl>

                    <TouchableOpacity style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5, marginTop: 30 }} onPress={handleOnSubmit}>
                        <Text color="white">Add List</Text>
                    </TouchableOpacity>

                    {show && (
                        <DateTimePicker
                            testId="dateTimePicker"
                            value={date}
                            mode={mode}
                            in24Hours={true}
                            display="default"
                            onChange={ChangeDate}
                        />
                    )}
                </Box>

            </Stack>
        </Box >

    )
}
