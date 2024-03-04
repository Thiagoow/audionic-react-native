import { Stack } from 'expo-router/stack'

const MainStackNavigator = () => {
  return (
    <Stack>
      <Stack.Screen name="Main" options={{ animation: 'default' }} />

      <Stack.Screen name="Details" options={{ animation: 'default' }} />
    </Stack>
  )
}

export default MainStackNavigator
