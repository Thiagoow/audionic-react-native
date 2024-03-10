import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from '@Navigators/DrawerNavigator'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
