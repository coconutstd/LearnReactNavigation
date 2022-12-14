import { Button, View } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

export default function NotificationMainScreen({navigation}) {

  useEffect(() => {
    console.log('NotificationMainScreen rendered')
  },[])

  useFocusEffect(() => {
    console.log('TabNavigator 상태', navigation.getParent().getState())
  })

  return (
    <View>
      <Button title="Notification Nested Screen" onPress={() => navigation.navigate('NotificationNestedStack', {
        screen: 'NotificationNestedScreen'
      })} />
    </View>
  )
}