import { Button, View } from 'react-native'
import React from 'react'

export default function MessageMainScreen({ navigation }) {
  return (
    <View>
      <Button title='나를 누르면 깊게 들어가요' onPress={() => {
        navigation.navigate('MessageNestedScreen')
      }}/>
    </View>
  )
}