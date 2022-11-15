import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './screens/MainScreen'
import DetailScreen from './screens/DetailScreen'
import CommonStack from './navigation/commonStack'


const Stack = createNativeStackNavigator()

function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Main' component={MainScreen} options={{headerShown: false}} />
      <Stack.Screen name='Common' component={CommonStack} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App