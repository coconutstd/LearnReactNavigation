import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import MessageMainScreen from '../../../../screens/Message/MessageMainScreen'
import MessageNestedStack from './messageNestedStack'

const Stack = createStackNavigator()

function MessageStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageMainScreen" component={MessageMainScreen} />
      <Stack.Screen name="MessageNestedStack" component={MessageNestedStack} />
    </Stack.Navigator>
  )
}

export default MessageStack

