import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import NestedStack from './nestedStack'

const Stack = createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="NestedStack" component={NestedStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default  HomeStack

