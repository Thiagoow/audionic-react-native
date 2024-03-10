import { useMemo } from 'react'
import { StyleSheet, View, Text, ViewProps } from 'react-native'
import { colors } from '@Theme/colors'
import { Product } from '@Data/types'
import ProductCard from '@ComponentsProductCard'

type ProductsGridProps = {
  data: Product[]
  title?: string
} & ViewProps

const ProductsGrid = ({ data, title, ...rest }: ProductsGridProps) => {
  return useMemo(
    () => (
      <View style={[styles.productsList]} {...rest}>
        {title ? <Text style={styles.label}>{title}</Text> : null}

        <View style={styles.productsGrid}>
          {data.map((product: Product) => (
            <ProductCard
              {...product}
              {...{
                key: product.id,
                imgUrl: product.image_link,
                productColors: product.colors,
                averageRating: product.average_rating
              }}
            />
          ))}
        </View>
      </View>
    ),
    [data, title, Object.keys(rest)]
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
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
