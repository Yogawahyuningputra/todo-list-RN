import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from "react-query"
import { UserContextProvider } from "./src/context/userContext"
import Container from './Container';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: Failed prop type: Invalid props.style key tintColor supplied to Text.',
]); //Hide warnings 

LogBox.ignoreAllLogs();//Hide all warning notifications on front-end
const client = new QueryClient()

export default function App() {

  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <UserContextProvider>
          <NativeBaseProvider>
            <Container />
          </NativeBaseProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </NavigationContainer>

  );
}

