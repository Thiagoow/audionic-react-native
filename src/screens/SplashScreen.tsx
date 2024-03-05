import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { colors } from '@Theme/colors'

export default function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  function goToHome() {
    navigation.navigate('App')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Text>SplashScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.containerColor
  }
})
