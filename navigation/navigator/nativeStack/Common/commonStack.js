import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Modal from '../../../../screens/common/Modal'
import PurchaseStart from '../../../../screens/common/Purchase/PurchaseStart'
import PurchaseDoing from '../../../../screens/common/Purchase/PurchaseDoing'
import PurchaseEnd from '../../../../screens/common/Purchase/PurchaseEnd'
import TermStart from '../../../../screens/common/Terms/TermStart'
import TermDoing from '../../../../screens/common/Terms/TermDoing'
import TermEnd from '../../../../screens/common/Terms/TermEnd'

const Stack = createStackNavigator()

function CommonStack() {
  useEffect(() => {
    console.log('CommonStack이 생성되었어요')
    return () => {
      console.log('CommonStack이 삭제되었어요')
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal', headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="PurchaseStartScreen" component={PurchaseStart} />
        <Stack.Screen name="PurchaseDoingScreen" component={PurchaseDoing} />
        <Stack.Screen name="PurchaseEndScreen" component={PurchaseEnd} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="TermStartScreen" component={TermStart} />
        <Stack.Screen name="TermDoingScreen" component={TermDoing} />
        <Stack.Screen name="TermEndScreen" component={TermEnd} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default CommonStack

