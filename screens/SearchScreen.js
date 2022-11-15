import React from 'react'
import {View, Button} from 'react-native'

function SearchScreen({navigation}) {
  return (
    <View>
      <Button title="탭간 이동" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  )
}

export default SearchScreen