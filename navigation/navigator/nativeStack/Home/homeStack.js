import React, { useEffect } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../../../../screens/Home/HomeScreen'
import DetailScreen from '../../../../screens/Home/DetailScreen'
import HomeWebviewScreen from '../../../../screens/Home/HomeWebviewScreen'

const Stack = createNativeStackNavigator()

function HomeStack({ navigation, route }) {
  useEffect(() => {
    console.log('HomeStack이 생성되었어요')
    return () => {
      console.log('HomeStack이 삭제되었어요')
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="HomeWebviewScreen" component={HomeWebviewScreen}
                    // initialParams={{ globalNavigation: route.params?.globalNavigation }}
      />
    </Stack.Navigator>
  )
}

export default  HomeStack

