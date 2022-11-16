import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchMainScreen from '../../../../screens/Search/SearchMainScreen'

const Stack = createStackNavigator()

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchMainScreen" component={SearchMainScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack

