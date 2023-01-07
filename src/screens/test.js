// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Home from './Home'
// import Login from './login'
// import List from './listtodo'
// import Addcategory from './addcategory'

// const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator initialRouteName='Waystodo' screenOptions={({ route }) => ({
//                 headerShown: false, tabBarIcon: ({ focused, color, size }) => {
//                     let iconName
//                     if (route.name === "Home") {
//                         iconName = focused ? "clipboard-list-outline" : "clipboard-list-outline"
//                     }
//                     if (route.name === "List") {
//                         iconName = focused ? "playlist-plus" : "playlist-plus"
//                     }
//                     if (route.name === "Add Category") {
//                         iconName = focused ? "shape-outline" : "shape-outline"
//                     }
//                     return (
//                         <MaterialCommunityIcons name={iconName} color={color} size={size} />
//                     )
//                 }
//             })}>
//                 <Tab.Screen name="Home" component={Home} />
//                 <Tab.Screen name="List" component={List} />
//                 <Tab.Screen name="Add Category" component={Addcategory} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }