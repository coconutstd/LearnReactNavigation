import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NotificationMainScreen from '../../../../screens/Notification/NotificationMainScreen'

const Stack = createStackNavigator()

function NotificationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotificationMainScreen" component={NotificationMainScreen} />
    </Stack.Navigator>
  )
}

export default NotificationStack

