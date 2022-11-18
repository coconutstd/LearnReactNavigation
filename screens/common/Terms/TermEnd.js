import React from 'react'
import { Button, Text, View } from 'react-native'

export default function TermEnd({ navigation }) {
  return (
    <View>
      <Text>약관 종료 페이지 입니다</Text>
      <Button title="구매 페이지로 가기" onPress={() => {
        navigation.navigate('PurchaseStartScreen')
      }}/>
    </View>
  )
}