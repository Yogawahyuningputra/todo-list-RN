import { useContext, useState } from "react";
import { Modal, VStack, Button, Text, Image, View, HStack, Box } from "native-base";
import { UserContext } from "../context/userContext";
import { showMessage } from "react-native-flash-message";
import { useQuery } from "react-query";
import { API } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function User({ listCount }) {
    const [state, dispatch] = useContext(UserContext)
    const [modalVisible, setModalVisible] = useState(false)

    let { data: todos } = useQuery("TodosCache", async () => {
        let Response = await API.get("/todos")
        return Response.data
    })

    const handleLogout = () => {
        AsyncStorage.removeItem("token")
        dispatch({
            type: "LOGOUT",
        })
        showMessage({
            message: "Your Account Logout!",
            type: "success",
        })
    }
    const handleUpdate = () => {
        alert("Comming Soon ")
    }
    let list = 0
    listCount
        ? (list = listCount.length)
        : todos?.length > 0
            ? (list = todos.length)
            : null
    return (
        <Box>
            <HStack justifyContent="space-between" space={225}>
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text>{state?.data?.user?.firstName}</Text>
                        <Text>{list} list</Text>
                    </VStack>
                </HStack>
                <HStack style={{ alignContent: "center", justifyContent: "flex-end" }}>
                    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-start" top="50" size="sm">
                        <Modal.Content>
                            <Modal.CloseButton />
                            <Modal.Header>My Profile </Modal.Header>
                            <VStack marginLeft="4">
                                <Text>Name : {state?.data?.user?.firstName}</Text>
                                <Text>Email : {state?.data?.user?.email}</Text>
                                <Text>Phone : {state?.data?.user?.phone}</Text>

                            </VStack>
                            <Modal.Footer alignContent="center" justifyContent="center">
                                <Button colorScheme="success" style={{ marginRight: 20 }} onPress={handleUpdate}>
                                    <Text color="white">Update</Text>
                                </Button>
                                <Button colorScheme="danger" onPress={handleLogout}>
                                    <Text color="white">Logout</Text>
                                </Button>

                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                    <VStack alignItems="center">
                        <Button variant="transparant" onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                            <Image source={require('../../assets/user.png')} alt="date" />
                        </Button>

                    </VStack>
                </HStack>
            </HStack>
        </Box>
    )
}