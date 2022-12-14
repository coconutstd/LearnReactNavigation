import React, { useEffect } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeStack from '../nativeStack/Home/homeStack'
import SearchStack from '../nativeStack/Search/searchStack'
import NotificationStack from '../nativeStack/Notification/notificationStack'
import MessageStack from '../nativeStack/Message/messageStack'

const Tab = createBottomTabNavigator()

function BottomTabNavigator({navigation, route}) {

  useEffect(() => {
    console.log('BottomTabNavigator', navigation.getState())
  }, [])

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack}
                  // initialParams={{globalNavigation: route.params?.globalNavigation}}
                  options={{title: '홈', tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size}/>)}}/>
      <Tab.Screen name="SearchStack" component={SearchStack} options={{title: '검색', tabBarIcon: ({color, size}) => (<Icon name="search" color={color} size={size}/>) }}/>
      <Tab.Screen name="NotificationStack" component={NotificationStack} options={{title: '알림', tabBarIcon: ({color, size}) => (<Icon name="notifications" color={color} size={size}/>) }}/>
      <Tab.Screen name="MessageStack" component={MessageStack} options={{title: '메시지', tabBarIcon: ({color, size}) => (<Icon name="message" color={color} size={size}/>) }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator