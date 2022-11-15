import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, View, Button} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeStack from '../navigation/homeStack'
import MessageStack from '../navigation/messageStack'

const Tab = createBottomTabNavigator()

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}





function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{title: '홈', tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size}/>) }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{title: '검색', tabBarIcon: ({color, size}) => (<Icon name="search" color={color} size={size}/>) }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} options={{title: '알림', tabBarIcon: ({color, size}) => (<Icon name="notifications" color={color} size={size}/>) }}/>
      <Tab.Screen name="Message" component={MessageStack} options={{title: '메시지', tabBarIcon: ({color, size}) => (<Icon name="message" color={color} size={size}/>) }}/>
    </Tab.Navigator>
  )
}

export default MainScreen