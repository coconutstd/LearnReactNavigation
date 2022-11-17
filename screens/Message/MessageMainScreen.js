import { Button, View } from 'react-native'
import React, { useEffect } from 'react'

export default function MessageMainScreen({ navigation }) {

  useEffect(() => {
    console.log('MessageMainScreen rendered')
  },[])

  return (
    <View>
      <Button title='나를 누르면 깊게 들어가요' onPress={() => {
        navigation.navigate('MessageNestedStack')
      }}/>
    </View>
  )
}