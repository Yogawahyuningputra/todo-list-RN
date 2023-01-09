import { Image, Text, TouchableOpacity } from 'react-native';
import { Center, VStack, View } from "native-base";

export default function Home({ navigation }) {
    return (
        <VStack style={{ marginTop: 80 }}>

            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                <Image source={require("../../assets/accept-request.png")} alt="images" style={{ width: "70%" }} />
            </View>
            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: 30 }}>
                <Image source={require("../../assets/Waystodo.png")} alt="images" style={{ width: "50%" }} />
            </View>
            <Center style={{ width: "100%", marginVertical: 50 }}>
                <Text style={{ color: "black", marginStart: 30, marginEnd: 30 }}>
                    Write your activity and finish your activity.
                    Fast, Simple and Easy to Use
                </Text>
            </Center>
            <Center>
                <TouchableOpacity onPress={() => navigation.navigate("login")} style={{ backgroundColor: "#FF5555", paddingHorizontal: 150, paddingVertical: 15, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("register")} style={{ backgroundColor: "#0000004F", paddingHorizontal: 140, paddingVertical: 15, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
                </TouchableOpacity>



            </Center>
        </VStack>
    );
}

