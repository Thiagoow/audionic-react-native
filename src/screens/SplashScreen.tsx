import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Image } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import Slider from 'react-native-slide-to-unlock'
import BrandLogo from '@Assets/brand/audionicLogo.svg'
import { colors } from '@Theme/colors'

export default function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const imgUrl = require('@Assets/background/splashScreen.png')

  function goToHome() {
    navigation.navigate('App')
  }

  const sliderElement = (
    <View style={styles.sliderChevron}>
      <Icon name="chevron-right" size={20} color={colors.primaryColor} />
    </View>
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.heading}>
        <BrandLogo
          fill={colors.whiteColor}
          style={{ width: 202, height: 57 }}
        />

        <Text style={styles.subtitle}>Search for Wireless Headphones</Text>
      </View>

      <Image source={imgUrl} style={styles.backgroundImg} />

      <Slider
        onEndReached={goToHome}
        sliderElement={sliderElement}
        containerStyle={styles.sliderContainer}
        childrenContainer={styles.sliderChildrenContainer}
      >
        <View>
          <Text style={styles.sliderText}>Swipe to access</Text>
        </View>
      </Slider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor
  },
  heading: {
    top: 80,
    rowGap: 40,
    position: 'absolute',
    alignItems: 'center',
    marginBottom: 30
  },
  subtitle: {
    fontSize: 17,
    maxWidth: 200,
    lineHeight: 28,
    textAlign: 'center',
    color: colors.whiteColor
  },
  backgroundImg: {
    zIndex: -1,
    position: 'absolute',
    opacity: 0.3,
    left: 30,
    bottom: 0,
    width: 430,
    height: 646,
    resizeMode: 'contain'
  },
  sliderContainer: {
    position: 'absolute',
    bottom: 80,
    width: '80%',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: colors.whiteColor,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderChildrenContainer: {
    alignSelf: 'flex-end'
  },
  sliderText: {
    fontSize: 17,
    marginRight: 20,
    color: colors.whiteColor
  },
  sliderChevron: {
    margin: 6,
    width: 36,
    height: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteColor
  }
})
