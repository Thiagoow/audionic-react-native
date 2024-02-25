import { useMemo } from 'react'
import { StyleSheet, View, Text, ViewProps } from 'react-native'
import { colors } from '../theme/colors'
import { Product } from '../data/types'
import ProductCard from '../components/ProductCard'

type ProductsGridProps = {
  data: Product[]
  title?: string
  brand?: Product['brand']
  marginBottom?: number
} & ViewProps

const ProductsGrid = ({
  data,
  title,
  brand,
  marginBottom,
  ...rest
}: ProductsGridProps) => {
  return useMemo(
    () => (
      <View style={[styles.productsList, { marginBottom }]} {...rest}>
        {title ? <Text style={styles.label}>{title}</Text> : null}

        <View style={styles.productsGrid}>
          {data.map((product: Product) =>
            product.brand === brand ? (
              <ProductCard
                {...product}
                key={product.id}
                imgUrl={product.image_link}
                productColors={product.colors}
                averageRating={product.average_rating}
              />
            ) : null
          )}
        </View>
      </View>
    ),
    [data, title, brand, marginBottom, Object.keys(rest)]
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blackColor
  },
  productsList: {
    marginTop: 40,
    rowGap: 14,
    alignSelf: 'flex-start'
  },
  productsGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    columnGap: 21,
    rowGap: 21
  }
})

export default ProductsGrid
