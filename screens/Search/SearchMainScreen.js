import React from 'react'
import { Button, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function SearchMainScreen({ navigation }) {

  useFocusEffect(() => {

  })

  return (
    <View>
      <Button title="HomeStack > HomeWebviewScreen" onPress={() => navigation.navigate('HomeStack', {
        screen: 'HomeWebviewScreen',
        params: {
          routes: [{name: 'HomeWebviewScreen'}]
        }
      })} />
    </View>
  )
}