import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@Theme/colors'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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
