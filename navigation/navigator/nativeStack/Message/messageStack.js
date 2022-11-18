import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import MessageMainScreen from '../../../../screens/Message/MessageMainScreen'
import AlarmScreen from '../../../../screens/Message/AlarmScreen'

const Stack = createStackNavigator()

function MessageStack() {
  useEffect(() => {
    console.log('MessageStack이 생성되었어요')
    return () => {
      console.log('MessageStack이 삭제되었어요')
    }
  }, [])
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageMainScreen" component={MessageMainScreen} />
      <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
    </Stack.Navigator>
  )
}

export default MessageStack

