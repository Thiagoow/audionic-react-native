import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
