import * as React from "react"
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


//===nesting navigation router====//

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function TabsBottom() {
    return (
        <Tab.Navigator initialRouteName='ListTodo' screenOptions={({ route }) => ({
            headerShown: false, tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name === "ListTodo") {
                    iconName = focused ? "clipboard-list-outline" : "clipboard-list-outline"
                }
                if (route.name === "AddList") {
                    iconName = focused ? "playlist-plus" : "playlist-plus"
                }
                if (route.name === "AddCategory") {
                    iconName = focused ? "shape-outline" : "shape-outline"
                }
                if (route.name === "logout") {
                    iconName = focused ? "logout" : "logout"
                }
                return (
                    <MaterialCommunityIcons name={iconName} color={color} size={size} />
                )
            }
        })}>
            <Tab.Screen name="ListTodo" component={ListTodo} />
            <Tab.Screen name="AddList" component={AddList} />
            <Tab.Screen name="AddCategory" component={AddCategory} />
        </Tab.Navigator>
    )
}



export default function Cointainer() {


    return (
        <>

            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                {/* </Stack.Navigator>

            <Stack.Navigator> */}
                <Stack.Screen name="listtodo" component={TabsBottom} options={{ headerShown: false }} />
                <Stack.Screen name="detaillist" component={DetailList} options={{ title: 'Details list' }} />
                {/* <Stack.Screen name="addlist" component={AddList} options={{ title: 'Add List' }} /> */}
                {/* <Stack.Screen name="test" component={Test} options={{ title: 'test' }} /> */}

            </Stack.Navigator>
        </>



    )
}
