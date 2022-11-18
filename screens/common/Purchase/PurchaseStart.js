import React from 'react'
import { Button, Text, View } from 'react-native'

export default function PurchaseStart({ navigation }) {
  return (
    <View>
      <Text>구매 시작 페이지 입니다</Text>
      <Button title="구매 진행 페이지로 이동" onPress={() => {
        navigation.navigate('PurchaseDoingScreen')
      }}/>
    </View>
  )
}