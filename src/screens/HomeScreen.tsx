import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { colors } from '../theme/colors'
import Header from '../components/Header'
import CategoryOne from '../assets/categories/beats.svg'
import CategoryTwo from '../assets/categories/jbl.svg'
import CategoryThree from '../assets/categories/akg.svg'
import headphonesData from '../data/headphones'
import speakersData from '../data/speakers'
import ProductsGrid from '../components/ProductsGrid'
import { Product } from '../data/types'

export default function HomeScreen() {
  const allProducts = [...speakersData, ...headphonesData]

  function filterProductByBrand(brand: Product['brand']) {
    return allProducts.filter((product: Product) => product.brand === brand)
  }

  return (
    <View style={styles.container}>
      <Header home />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.backgroundRadius}
      >
        <View style={styles.categories}>
          <Text style={styles.label}>Filter by brand</Text>

          <ScrollView
            contentContainerStyle={styles.categoryScrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('beats')}
            >
              <CategoryOne fill={colors.blackColor} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('jbl')}
            >
              <CategoryTwo fill={colors.blackColor} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('akg')}
            >
              <CategoryThree fill={colors.blackColor} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ProductsGrid
          title="Beats products"
          data={filterProductByBrand('Beats')}
        />

        <ProductsGrid
          title="JBL products"
          data={filterProductByBrand('JBL')}
          marginBottom={46}
        />
      </ScrollView>
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
    paddingLeft: 27,
    paddingVertical: 23,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.containerColor
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blackColor
  },
  categories: {
    rowGap: 16
  },
  categoryScrollView: {
    columnGap: 20,
    paddingRight: 20
  },
  categoryCard: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.whiteColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25
  }
})
