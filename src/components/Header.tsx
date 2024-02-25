import { useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ViewProps, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '../theme/colors'
import BrandLogo from '../assets/brand/audionicLogo.svg'

type HeaderProps = {
  home?: boolean
} & ViewProps

const Header = ({ home, ...rest }: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  function goBack() {
    navigation.goBack()
  }

  function toggleDrawer() {
    console.log('Open drawer')
  }

  function searchProducts() {
    console.log('Search products')
  }

  function goToCart() {
    navigation.navigate('Cart')
  }

  return useMemo(
    () => (
      <View style={styles.headerBackground} {...rest}>
        <StatusBar style="auto" />

        <TouchableOpacity onPress={home ? toggleDrawer : goBack}>
          <Icon
            name={home ? 'bars' : 'arrow-left'}
            size={25}
            color={colors.blackColor}
          />
        </TouchableOpacity>

        <BrandLogo fill={colors.primaryColor} width={98} height={28} />

        <TouchableOpacity onPress={home ? searchProducts : goToCart}>
          <Icon
            name={home ? 'magnifying-glass' : 'bag-shopping'}
            size={25}
            color={colors.blackColor}
          />
        </TouchableOpacity>
      </View>
    ),
    [home, Object.keys(rest)]
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1
  }
})

export default Header
