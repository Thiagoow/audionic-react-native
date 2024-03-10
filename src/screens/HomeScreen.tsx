import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { colors } from '@Theme/colors'
import { Product } from '@Data/types'
import allProducts from '@Data/data'
import AppLayout from '@src/components/AppLayout'
import ProductsGrid from '@ComponentsProductsGrid'
import CategoryCard from '@ComponentsCategoryCard'
import CategoryOne from '@Assets/categories/beats.svg'
import CategoryTwo from '@Assets/categories/jbl.svg'
import CategoryThree from '@Assets/categories/akg.svg'

export default function HomeScreen() {
  function filterProductByBrand(brand: Product['brand']) {
    return allProducts.filter((product: Product) => product.brand === brand)
  }

  function listProductByBrand(brand: Product['brand']) {
    console.log(`listing ${brand} products`)
  }

  return (
    <AppLayout contentPadding>
      <View style={styles.categories}>
        <Text style={styles.label}>Filter by brand</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollView}
        >
          <CategoryCard onPress={() => listProductByBrand('Beats')}>
            <CategoryOne
              fill={colors.blackColor}
              style={{ width: 25, height: 25 }}
            />
          </CategoryCard>

          <CategoryCard onPress={() => listProductByBrand('JBL')}>
            <CategoryTwo
              fill={colors.blackColor}
              style={{ width: 35, height: 25 }}
            />
          </CategoryCard>

          <CategoryCard onPress={() => listProductByBrand('AKG')}>
            <CategoryThree
              fill={colors.blackColor}
              style={{ width: 50, height: 25 }}
            />
          </CategoryCard>
        </ScrollView>
      </View>

      <ProductsGrid
        title="Beats products"
        data={filterProductByBrand('Beats')}
      />

      <ProductsGrid title="JBL products" data={filterProductByBrand('JBL')} />
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
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
