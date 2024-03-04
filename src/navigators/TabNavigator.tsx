import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Theme/colors'
import HomeScreen from '@Screens/HomeScreen'
import FavoriteScreen from '@Screens/FavoriteScreen'
import CartScreen from '@Screens/CartScreen'
import ProfileScreen from '@Screens/ProfileScreen'
import Header from '@ComponentsHeader'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="house"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          ),
          header: () => <Header home />
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              solid
              name="heart"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          ),
          header: () => <Header />
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bag-shopping"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          ),
          header: () => <Header />
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              solid
              name="user"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          ),
          header: () => <Header />
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: colors.whiteColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  }
})

export default TabNavigator
