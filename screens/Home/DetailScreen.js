import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

function DetailScreen({navigation}) {
  useEffect(() => {
    console.log('DetailScreen ', navigation.getState())
  }, [])
  return (
    <View>
      <Text>Detail</Text>
      <Button title="HomeWebviewScreen" onPress={() => {
        navigation.navigate('HomeWebviewScreen')
      }}/>
    </View>
  )
}

export default DetailScreen