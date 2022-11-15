import React from 'react'
import {View, Text, Button} from 'react-native'

export default function NestedMain({ navigation }) {
  return (
    <View>
      <Text>Nested Main 입니다</Text>
      <Button title="버튼입니다." />
    </View>
  )
}