import { createDrawerNavigator } from '@react-navigation/drawer'
import MainStackNavigator from '@Navigators/StackNavigator'
import SplashScreen from '@Screens/SplashScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Splash" component={SplashScreen} />
      <Drawer.Screen name="App" component={MainStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
