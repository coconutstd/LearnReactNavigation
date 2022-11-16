import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../../../../screens/Home/HomeScreen'
import DetailScreen from '../../../../screens/Home/DetailScreen'
import NestedStack from './nestedStack'

const Stack = createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="NestedStack" component={NestedStack} />
    </Stack.Navigator>
  )
}

export default  HomeStack

