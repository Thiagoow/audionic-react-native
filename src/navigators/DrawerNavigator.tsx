import { createDrawerNavigator } from '@react-navigation/drawer'
import MainStackNavigator from '@Navigators/StackNavigator'
import SplashScreen from '@Screens/SplashScreen'
import Header from '@ComponentsHeader'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="App"
        component={MainStackNavigator}
        options={{
          header: ({ navigation, route }) => (
            <Header
              home
              toggleDrawer={() => {
                console.log(route)
                navigation.toggleDrawer()
              }}
            />
          )
        }}
      />

      <Drawer.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
