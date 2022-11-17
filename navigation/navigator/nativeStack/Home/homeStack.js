import React, { useEffect } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../../../../screens/Home/HomeScreen'
import DetailScreen from '../../../../screens/Home/DetailScreen'
import HomeWebviewScreen from '../../../../screens/Home/HomeWebviewScreen'

const Stack = createNativeStackNavigator()

function HomeStack({ navigation }) {
  useEffect(() => {
    // console.log('HomeStack ', navigation.getState())
  }, [])

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="HomeWebviewScreen" component={HomeWebviewScreen} />
    </Stack.Navigator>
  )
}

export default  HomeStack

