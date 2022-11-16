import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import MessageNestedScreen from '../../../../screens/Message/MessageNestedScreen'

const Stack = createStackNavigator()

function MessageNestedStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageNestedScreen" component={MessageNestedScreen} />
    </Stack.Navigator>
  )
}

export default MessageNestedStack

