import * as React from "react"
import { useContext, useEffect, useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Register from "./src/screens/register"
import Login from "./src/screens/login"
import Home from "./src/screens/Home"
import AddList from "./src/screens/addlist"
import DetailList from "./src/screens/detaillist"
import ListTodo from "./src/screens/listtodo"
import AddCategory from "./src/screens/addcategory"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { API, setAuthToken } from "./src/config/api"
import { UserContext } from "./src/context/userContext"
import Spinner from 'react-native-loading-spinner-overlay'



const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

export default function Container() {
    const [isLoading, setIsLoading] = useState(true)
    const [state, dispatch] = useContext(UserContext)

    const checkAuth = async () => {
        try {
            let token = await AsyncStorage.getItem("token")

            if (token) setAuthorization(token)
            // send verification token to kontenbase
            await API.post("/auth/verify-token", {
                validateStatus: () => true,
            })
                .then((response) => {
                    if (response.status >= 400) {
                        return dispatch({
                            type: "AUTH_ERROR",
                        })
                    }

                    const payload = response.data
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        payload,
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: "AUTH_ERROR",
                    })
                })
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        }
    }

    const checkUser = async () => {
        await AsyncStorage.getItem("token")
        checkAuth()
    }

    useEffect(() => {
        checkUser()
    }, [state])


    //===nesting navigation router====//

    function TabsBottom() {

        return (
            <Tab.Navigator initialRouteName='ListTodo' screenOptions={({ route }) => ({
                headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === "List Todo") {
                        iconName = focused ? "clipboard-list-outline" : "clipboard-list-outline"
                    }
                    if (route.name === "Add List") {
                        iconName = focused ? "playlist-plus" : "playlist-plus"
                    }
                    if (route.name === "Add Category") {
                        iconName = focused ? "shape-outline" : "shape-outline"
                    }
                    if (route.name === "logout") {
                        iconName = focused ? "logout" : "logout"
                    }
                    return (
                        <MaterialCommunityIcons name={iconName} color={color} size={35} />
                    )
                }
            })}>
                <Tab.Screen name="List Todo" component={ListTodo} />
                <Tab.Screen name="Add List" component={AddList} />
                <Tab.Screen name="Add Category" component={AddCategory} />
            </Tab.Navigator>
        )
    }



    return (
        <>
            {isLoading ? (

                <Spinner size="large" visible={isLoading} textContent={'Waiting...'} overlayColor="rgba(0, 0, 0, 0.25)" />

            ) :
                state.isLogin ? (
                    <Stack.Navigator>
                        <Stack.Screen name="listtodo" component={TabsBottom} options={{ headerShown: false }} />
                        <Stack.Screen name="detaillist" component={DetailList} options={{ title: 'Details list' }} />
                        {/* <Stack.Screen name="addlist" component={AddList} options={{ title: 'Add List' }} /> */}
                        {/* <Stack.Screen name="test" component={Test} options={{ title: 'test' }} /> */}
                    </Stack.Navigator>


                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
                        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                    </Stack.Navigator>
                )}
        </>



    )
}
