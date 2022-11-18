import React from 'react'
import { Button, Text, View } from 'react-native'

export default function TermStart({ navigation }) {
  return (
    <View>
      <Text>약관 시작 페이지 입니다</Text>
      <Button title="약관 다음 페이지로 가기" onPress={() => {
        navigation.navigate('TermDoingScreen')
      }}/>
    </View>
  )
}