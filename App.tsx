import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from '@Navigators/DrawerNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
