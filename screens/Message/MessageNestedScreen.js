import { Button, View } from 'react-native'
import React from 'react'

export default function MessageNestedScreen({navigation}) {
  return (
    <View>
      <Button title='나는 깊이 숨겨져 있는 스크린이에요' onPress={() => {
        navigation.navigate('Search')
      }}/>
    </View>
  )
}