import * as React from 'react'
import { FormControl, HStack, VStack, Box, Select, View, Text, Input, Heading, Badge, Avatar, Image, ScrollView, Checkbox } from 'native-base'

export default function List() {

    return (

        <Box alignItems="center" justifyContent="center" marginTop="5" w="100%">
            <HStack space={215} marginBottom="1">
                <View>
                    <Heading>
                        Hi Radif
                    </Heading>
                    <Text>200 list</Text>
                </View>
                <View>
                    <Avatar bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                    </Avatar>
                </View>

            </HStack>
            <HStack space={3} justifyContent="center" w="90%" marginBottom="5">
                <FormControl>
                    <Input size="md" type="text" placeholder="Search list" backgroundColor={999999} />
                </FormControl>
            </HStack>
            <HStack space={3} justifyContent="center" w="95%" marginBottom="5">
                <FormControl w="106">
                    <Input size="md" type="date" placeholder="choose date" backgroundColor={999999} />
                </FormControl>
                <Select w="106" accessibilityLabel="Choose Service" placeholder="Category" backgroundColor={999999}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>
                <Select w="106" accessibilityLabel="Choose Service" placeholder="Status" backgroundColor={999999}>
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>

            </HStack>
            <ScrollView h="470">
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#DAEFFF", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Study Golang
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Learn Golang to improve fundamentals and familiarize with coding.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="primary" style={{ borderRadius: 5 }}>Study</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Checkbox colorScheme="green" style={{ borderRadius: 10, width: 30, height: 30 }} />

                        </View>

                    </VStack>
                </HStack>
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#F1FFEF", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Home Work - Mathematics
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Do homework math probability
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="danger" style={{ borderRadius: 5 }}>Home Work</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Image source={require('../../assets/checklist.png')} alt="images" />
                        </View>

                    </VStack>
                </HStack>
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#FFEFEF", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Study HTML
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Learn HTML to improve fundamentals and familiarize with coding.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="primary" style={{ borderRadius: 5 }}>Study</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Image source={require('../../assets/Ellipse.png')} alt="date" />
                        </View>

                    </VStack>
                </HStack>
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#FEFFDA", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Study Golang
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Learn Golang to improve fundamentals and familiarize with coding.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="primary" style={{ borderRadius: 5 }}>Study</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Image source={require('../../assets/Ellipse.png')} alt="date" />
                        </View>

                    </VStack>
                </HStack>
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#FEFFDA", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Study Golang
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Learn Golang to improve fundamentals and familiarize with coding.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="primary" style={{ borderRadius: 5 }}>Study</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Image source={require('../../assets/Ellipse.png')} alt="date" />
                        </View>

                    </VStack>
                </HStack>
                <HStack space={3} justifyContent="center" style={{ backgroundColor: "#FEFFDA", height: 120, width: 345, paddingHorizontal: 10, borderRadius: 5, marginBottom: 15 }}>
                    <VStack paddingLeft={1} w="225">
                        <View>
                            <Text>
                                Study Golang
                            </Text>
                        </View>
                        <View h="71">
                            <Text>
                                Learn Golang to improve fundamentals and familiarize with coding.
                            </Text>
                        </View>
                        <View>
                            <Text>
                                <Image source={require('../../assets/date.png')} alt="date" />{'  '}
                                20 Januari 2022
                            </Text>
                        </View>

                    </VStack>
                    <VStack w="100">
                        <View marginTop={2}>
                            <Badge colorScheme="primary" style={{ borderRadius: 5 }}>Study</Badge>
                        </View>
                        <View marginTop={5} alignItems="center" justifyContent="center">
                            <Image source={require('../../assets/Ellipse.png')} alt="date" />
                        </View>

                    </VStack>
                </HStack>
            </ScrollView>

        </Box >

    )
}