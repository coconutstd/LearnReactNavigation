import { Button, View } from 'react-native'
import React, { useEffect } from 'react'

export default function NotificationMainScreen({navigation}) {

  useEffect(() => {
    console.log('NotificationMainScreen rendered')
  },[])

  return (
    <View>
      <Button title="Notification Nested Screen" onPress={() => navigation.navigate('NotificationNestedStack', {
        screen: 'NotificationNestedScreen'
      })} />
    </View>
  )
}