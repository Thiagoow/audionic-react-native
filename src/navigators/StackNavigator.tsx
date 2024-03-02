import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from '@Navigators/TabNavigator'
import DetailScreen from '@Screens/DetailScreen'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ animation: 'default' }}
      />

      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ animation: 'default' }}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
