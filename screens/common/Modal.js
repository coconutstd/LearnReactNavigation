import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Modal = ({navigation}) => {

  useEffect(() => {
    console.log('Modal', navigation.getState())
  }, [])

  return (
    <View>
      <Text>
        나는 모달인데요
        <Button title='뒤로가기' onPress={() => {
          navigation.goBack()
        }}/>
      </Text>
    </View>
  )
}

export default Modal
