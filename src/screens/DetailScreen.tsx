import { RouteProp } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'
import { Product } from '../data/types'
import Header from '../components/Header'
import headphonesData from '../data/headphones'
import speakersData from '../data/speakers'

interface DetailScreenProps {
  route: RouteProp<{ params: Pick<Product, 'type' | 'id'> }, 'params'>
}

export default function DetailScreen({ route }: DetailScreenProps) {
  const { id, type } = route.params
  const data = type === 'Headphones' ? headphonesData : speakersData
  const product = data.find((product: Product) => product.id === id) as Product

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.backgroundRadius}>
        <Text>{product.name}</Text>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
})
