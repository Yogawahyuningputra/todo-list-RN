import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import { FormControl, Pressable, HStack, VStack, Box, Select, View, Text, Input, Heading, Badge, Image, ScrollView, Checkbox } from 'native-base'
import User from './user'
import { useQuery } from 'react-query'
import { API } from '../config/api'
import { UserContext } from '../context/userContext'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'

export default function List() {
    const [state, dispatch] = useContext(UserContext)
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

    const { data: todosData, refetch: todorefetch } = useQuery("todosDataCache", async () => {
        const response = await API.get("/todos")
        return response.data
    })

    const { data: categoryData } = useQuery("categoryDataCache", async () => {
        const response = await API.get("/Categories")
        return response.data
    })
    // console.log("isi todos", state?.user?.user)
    useEffect(() => {
        todorefetch()
    }, [])

    return (


        <Box alignItems="center" justifyContent="center" marginTop="5" w="100%">
            <HStack space={196} marginBottom="1">
                <View>
                    <User />
                </View>
            </HStack>
            <HStack space={3} justifyContent="center" w="90%" marginBottom="5">
                <FormControl>
                    <Input size="md" type="text" placeholder="Search list" backgroundColor="lightgrey" />
                </FormControl>
            </HStack>

            <HStack space={3} justifyContent="center" w="95%" marginBottom="5">
                <FormControl w="120">
                    <Pressable p={3} h={46} bg="lightgrey" fontSize={10}
                        // borderWidth={2}
                        borderRadius={5}
                        borderColor="muted.400"
                        title="DatePicker"
                        onPress={() => showMode("date")}
                    >
                        <HStack justifyContent="space-between">
                            <Text fontSize={12} color="Gray.400">
                                {text}
                            </Text>
                            <Text color="blueGray.400">
                                <Ionicons name="calendar-outline" size={25} />
                            </Text>
                        </HStack>
                    </Pressable>
                </FormControl>
                <Select w="100" accessibilityLabel="Choose Service" placeholder="Category" backgroundColor="lightgrey">
                    {categoryData?.map((item, i) => (

                        <Select.Item key={i} label={item?.name} value={item?.name} />
                    ))}

                </Select>
                <Select w="100" accessibilityLabel="Choose Service" placeholder="Status" backgroundColor="lightgrey">
                    <Select.Item label="to soon" value="to soon" />
                </Select>

            </HStack>
            <ScrollView h="530">
                {todosData?.map((item, index) => {
                    const random = Math.random();
                    let color;
                    if (random > 0.66) {
                        color = "success";
                    } else if (random > 0.33) {
                        color = "info";
                    } else {
                        color = "warning";
                    }
                    return (
                        <HStack onPress={() => navigation.navigate("detaillist")} key={index} space={3} justifyContent="center" backgroundColor={color} style={{ height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                            <VStack paddingLeft={1} w="225" >
                                <View>
                                    <Text>
                                        {item?.name}
                                    </Text>
                                </View>
                                <View h="71">
                                    <Text>
                                        {item?.description}
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        <Image source={require('../../assets/date.png')} alt="date" style={{ height: 16, width: 16 }} />{'  '}
                                        {moment(item?.date).format("DD MMMM YYYY")}
                                    </Text>
                                </View>
                            </VStack>
                            <VStack w="100">
                                <View marginTop={2}>
                                    <Badge colorScheme="danger" style={{ borderRadius: 5 }}>{item?.category[0].name}</Badge>
                                </View>
                                <View marginTop={5} alignItems="center" justifyContent="center">
                                    <Checkbox colorScheme="green" style={{ borderRadius: 10, width: 30, height: 30 }} />
                                </View>
                            </VStack>
                        </HStack>
                    )
                })}
            </ScrollView>
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
        </Box >

    )
}