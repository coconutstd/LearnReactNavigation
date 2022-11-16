import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './navigation/navigator/bottomTab/BottomTabNavigator'
import DetailScreen from './screens/Home/DetailScreen'
import CommonStack from './navigation/navigator/nativeStack/Common/commonStack'


const Stack = createNativeStackNavigator()

function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Main' component={BottomTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name='Common' component={CommonStack} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App