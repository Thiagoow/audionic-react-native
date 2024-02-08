import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../theme/colors'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Favorite"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              solid
              name="heart"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Cart"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="shopping-bag"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="History"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              solid
              name="user"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: colors.whiteColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  }
})

export default TabNavigator
