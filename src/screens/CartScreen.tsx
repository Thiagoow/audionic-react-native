import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'
import Header from '../components/Header'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.backgroundRadius}>
        <Text>Cart</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor
  },
  backgroundRadius: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.containerColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  }
})
