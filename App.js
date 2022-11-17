import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './navigation/navigator/bottomTab/BottomTabNavigator'
import CommonStack from './navigation/navigator/nativeStack/Common/commonStack'

const Stack = createNativeStackNavigator()

function App() {
  const navigationRef = useNavigationContainerRef()

  useEffect(() => {
  }, [])

  return <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name='MainBottomTab' component={BottomTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name='CommonStack' component={CommonStack}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App