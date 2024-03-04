import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Constants/colors'

const TabNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="house"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="Favorite"
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
      ></Tabs.Screen>

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="bag-shopping"
              size={25}
              color={focused ? colors.primaryColor : colors.greyColor}
            />
          )
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="Profile"
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
      ></Tabs.Screen>
    </Tabs>
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
