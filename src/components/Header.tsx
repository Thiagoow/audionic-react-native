import { useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ViewProps } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '../theme/colors'
import BrandLogo from '../assets/brand/audionicLogo.svg'

type HeaderProps = {
  home?: boolean
} & ViewProps

const Header = ({ home, ...rest }: HeaderProps) => {
  return useMemo(
    () => (
      <View style={styles.headerBackground} {...rest}>
        <StatusBar style="auto" />

        <Icon
          name={home ? 'bars' : 'arrow-left'}
          size={25}
          color={colors.blackColor}
        />

        <BrandLogo fill={colors.primaryColor} width={98} height={28} />

        <Icon
          name={home ? 'magnifying-glass' : 'bag-shopping'}
          size={25}
          color={colors.blackColor}
        />
      </View>
    ),
    [home,  Object.keys(rest)]
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
