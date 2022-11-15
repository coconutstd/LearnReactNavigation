import React from 'react'

import Modal from '../screens/common/Modal'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function CommonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Modal" component={Modal} options={{ presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default  CommonStack

