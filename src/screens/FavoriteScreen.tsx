import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
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
