import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NotificationMainScreen from '../../../../screens/Notification/NotificationMainScreen'

const Stack = createStackNavigator()

function NotificationStack() {
  useEffect(() => {
    console.log('NotificationStack이 생성되었어요')
    return () => {
      console.log('NotificationStack이 삭제되었어요')
    }
  }, [])
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotificationMainScreen" component={NotificationMainScreen} />
    </Stack.Navigator>
  )
}

export default NotificationStack

