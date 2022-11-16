import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Modal from '../../../../screens/common/Modal'

const Stack = createStackNavigator()

function CommonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Modal" component={Modal} options={{ presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default CommonStack

