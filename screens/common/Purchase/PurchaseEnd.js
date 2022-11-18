import React from 'react'
import { Button, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function PurchaseEnd({ navigation }) {
  useFocusEffect(() => {
    console.log('get CommonStack navigation state', navigation.getState())
  })

  return (
    <View>
      <Text>구매 종료 페이지 입니다</Text>
      <Button title="메인으로 가기" onPress={() => {
        navigation.navigate('MainBottomTab', {
          screen: 'HomeStack'
        })
      }}/>
    </View>
  )
}