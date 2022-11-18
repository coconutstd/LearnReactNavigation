import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchMainScreen from '../../../../screens/Search/SearchMainScreen'

const Stack = createStackNavigator()

function SearchStack() {
  useEffect(() => {
    console.log('SearchStack이 생성되었어요')
    return () => {
      console.log('SearchStack이 삭제되었어요')
    }
  }, [])
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchMainScreen" component={SearchMainScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack

