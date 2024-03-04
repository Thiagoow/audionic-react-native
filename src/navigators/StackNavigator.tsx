import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from '@Navigators/TabNavigator'
import DetailScreen from '@Screens/DetailScreen'
import Header from '@ComponentsHeader'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ animation: 'default', headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ animation: 'default', header: () => <Header /> }}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
