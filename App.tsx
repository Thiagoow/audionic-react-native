import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './src/navigators/StackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}
