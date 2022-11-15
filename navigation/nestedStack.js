import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NestedMain from '../screens/NestedMain'

const Stack = createStackNavigator()

function NestedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NestedMain" component={NestedMain} options={{ presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default NestedStack

