import React from 'react'
import { View, Text, Button } from 'react-native'

function DetailScreen({navigation}) {
  return (
    <View>
      <Text>Detail</Text>
      <Button title="나를 누르면 모달이 열려요" onPress={() => {
        navigation.navigate('Common', {
          screen: 'Modal'
        })
      }}/>
      <Button title="나를 누르면 Nested Main 으로 가요" onPress={() => {
        navigation.navigate('Message')
      }}/>
    </View>
  )
}

export default DetailScreen