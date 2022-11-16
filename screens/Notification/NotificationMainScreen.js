import { Button, View } from 'react-native'
import React from 'react'

export default function NotificationMainScreen({navigation}) {
  return (
    <View>
      <Button title="탭간 이동" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  )
}