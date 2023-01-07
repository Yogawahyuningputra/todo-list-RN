import * as React from "react"
import { Box, Heading, Image, Stack, FormControl, Text, Input, View, Select, TextArea } from "native-base"
import { TouchableOpacity } from "react-native"

export default function AddList() {
    return (
        <Box alignItems="center" justifyContent="center" marginTop="10">
            <Stack>

                <Box alignItems="center">

                    <FormControl style={{ marginVertical: 40 }}>
                        <Heading>Add List</Heading>

                        <FormControl style={{ marginVertical: 20 }}>
                            <Input size="md" type="text" placeholder="Fullname" backgroundColor={999999} />
                        </FormControl>
                        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Category" backgroundColor={999999} >
                            <Select.Item label="UX Research" value="ux" />
                            <Select.Item label="Web Development" value="web" />
                            <Select.Item label="Cross Platform Development" value="cross" />
                            <Select.Item label="UI Designing" value="ui" />
                            <Select.Item label="Backend Development" value="backend" />
                        </Select>
                        <FormControl style={{ marginVertical: 20 }}>
                            <Input size="md" type="date" placeholder="choose date" backgroundColor={999999} />
                        </FormControl>
                        <FormControl>
                            <TextArea size="md" type="textarea" placeholder="Description" backgroundColor={999999} />
                        </FormControl>
                    </FormControl>

                    <TouchableOpacity style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5 }}>
                        <Text>Add List</Text>
                    </TouchableOpacity>


                </Box>

            </Stack>
        </Box >

    )
}
