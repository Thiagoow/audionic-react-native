import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { colors } from '../theme/colors'
import { Product } from '../data/types'
import headphonesData from '../data/headphones'
import speakersData from '../data/speakers'
import Header from '../components/Header'
import ProductsGrid from '../components/ProductsGrid'
import CategoryCard from '../components/CategoryCard'
import CategoryOne from '../assets/categories/beats.svg'
import CategoryTwo from '../assets/categories/jbl.svg'
import CategoryThree from '../assets/categories/akg.svg'

export default function HomeScreen() {
  const allProducts = [...speakersData, ...headphonesData]

  function filterProductByBrand(brand: Product['brand']) {
    return allProducts.filter((product: Product) => product.brand === brand)
  }

  return (
    <View style={styles.container}>
      <Header home />

      <ScrollView
        style={styles.backgroundRadius}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categories}>
          <Text style={styles.label}>Filter by brand</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScrollView}
          >
            <CategoryCard>
              <CategoryOne fill={colors.blackColor} />
            </CategoryCard>

            <CategoryCard>
              <CategoryTwo fill={colors.blackColor} />
            </CategoryCard>

            <CategoryCard>
              <CategoryThree fill={colors.blackColor} />
            </CategoryCard>
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
  }
})
