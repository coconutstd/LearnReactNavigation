import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

function DetailScreen({navigation}) {

  useFocusEffect(() => {
    console.log('TabNavigator 상태', navigation.getParent().getState())
  })

  return (
    <View>
      <Text>Detail</Text>
      <Button title="HomeWebviewScreen" onPress={() => {
        navigation.navigate('HomeWebviewScreen')
      }}/>
      <Button title="약관 동의하러 가기" onPress={() => {
        navigation.navigate('CommonStack', {
          screen: 'TermStartScreen'
        })
      }}/>
    </View>
  )
}

export default DetailScreen