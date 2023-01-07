import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from "react-query"

import Container from './Container';

const client = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <NativeBaseProvider>
          <Container />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>

  );
}

