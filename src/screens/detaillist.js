import * as React from 'react'
import { Box, HStack, VStack, Badge, Heading, Image, Text, View } from 'native-base'

export default function DetailList() {
    return (
        <Box alignItems="center" justifyContent="center" marginTop="8" w="100%" h="auto" backgroundColor="#DAEFFF">
            <HStack space={20} marginBottom="1">
                <View w="230">
                    <Heading>
                        Study Golang
                    </Heading>
                </View>

                <VStack>
                    <View alignItems="center" justifyContent="center">

                        <Badge colorScheme="primary" style={{ borderRadius: 5, marginBottom: 5 }}>Study</Badge>

                        <Image source={require("../../assets/Ellipse.png")} alt="img" />
                    </View>
                </VStack>
            </HStack>
            <Box w="90%" style={{ marginVertical: 10, textAlign: "justify" }}>
                <VStack >
                    <Text>
                        Learn Golang to improve fundamentals and familiarize with coding
                    </Text>
                </VStack>

                <Text marginTop="5">
                    Advantages of Go Go has advantages over other languages, including:
                </Text>
                <VStack marginTop="5">
                    <Text>
                        Supports concurrency at the language level with fairly easy application
                        Supports data processing with multiple processors at the same time (parallel processing)
                        Have a garbage collector
                        The compilation process is very fast
                        It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code.

                    </Text>
                </VStack>
                <VStack>
                    <Text marginTop="5">
                        Listing Material :
                    </Text>
                    <Text>
                        Installation
                        Setup Go Modules
                        Setup Gopath & Workspace
                        Go Command
                        Hello World
                        Variable
                        Tipe DataKonstanta
                        Operator
                        Condition
                        Loops
                    </Text>
                    <HStack>
                        <Image source={require("../../assets/date.png")} alt="date" />
                        <Text> 20 Januari 2022</Text>
                    </HStack>

                </VStack>
            </Box>

        </Box >
    )
}