import React, { useEffect } from 'react'
import {View, Button} from 'react-native'
import { useNavigationState } from '@react-navigation/native'

function HomeScreen({navigation}) {
  useEffect(() => {
    console.log('HomeScreen ', navigation.getState())
  }, [])

  return (
    <View>
      <Button title="Detail 열기" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  )
}

export default HomeScreen