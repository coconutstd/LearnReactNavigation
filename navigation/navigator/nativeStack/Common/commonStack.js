import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Modal from '../../../../screens/common/Modal'

const Stack = createStackNavigator()

function CommonStack() {
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal', headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default CommonStack

