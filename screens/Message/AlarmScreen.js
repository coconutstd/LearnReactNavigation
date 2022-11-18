import { Button, View } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

export default function AlarmScreen({ navigation }) {

  useEffect(() => {
    console.log('MessageMainScreen rendered')
  },[])

  useFocusEffect(() => {
    console.log('TabNavigator 상태', navigation.getParent().getState())
  })

  return (
    <View>
      <Button title='HomeScreen' onPress={() => {
        navigation.navigate('HomeScreen')
      }}/>
    </View>
  )
}