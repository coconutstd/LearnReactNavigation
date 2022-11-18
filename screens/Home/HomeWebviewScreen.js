import React, { useEffect } from 'react'
import {View, Button} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'

function HomeWebviewScreen({navigation, route}) {
  useFocusEffect(() => {
    if (route.params?.routes !== undefined) {
      navigation.dispatch(state => {
        return CommonActions.reset({
          ...state,
          index: 2,
          routes: [
            {name: 'HomeScreen'},
            {name: 'DetailScreen'},
            {name: 'HomeWebviewScreen'}
          ]
        })
      })
    }
  })

  return (
    <View>
      <Button title="공통모달 띄우기" onPress={() => navigation.push('CommonStack', {
        screen: 'Modal',
        initial: false
      })} />
      <Button title="그냥 뒤로가기" onPress={() => route.params?.globalNavigation.goBack()} />
    </View>
  )
}

export default HomeWebviewScreen