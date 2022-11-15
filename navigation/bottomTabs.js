import React from 'react'
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import SearchScreen from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()

function NotificationScreen() {
  return <Text>Notification</Text>
}

function MessageScreen() {
  return <Text>Message</Text>
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator