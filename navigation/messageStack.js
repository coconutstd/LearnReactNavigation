import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native'

const Stack = createStackNavigator()

function MessageScreen({navigation}) {
  return (
    <View>
      <Button title='나를 눌러도 모달이 열려요' onPress={() => {
        navigation.navigate('Common', {screen: 'Modal'})
      }}/>
      <Button title='나를 누르면 깊게 들어가요' onPress={() => {
        navigation.navigate('MessageNested')
      }}/>
    </View>
  )
}

function MessageNested() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MessageNestedScreen" component={MessageNestedScreen} />
    </Stack.Navigator>
  )
}

function MessageNestedScreen({navigation}) {
  return (
    <View>
      <Button title='나는 깊이 숨겨져 있는 스크린이에요' onPress={() => {
        navigation.navigate('Search')
      }}/>
    </View>
  )
}

function MessageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="MessageNested" component={MessageNested} />
    </Stack.Navigator>
  )
}

export default MessageStack

