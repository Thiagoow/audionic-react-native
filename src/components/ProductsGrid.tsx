import { useMemo } from 'react'
import { StyleSheet, View, Text, ViewProps } from 'react-native'
import { colors } from '@Theme/colors'
import { Product } from '@Data/types'
import ProductCard from '@ComponentsProductCard'

type ProductsGridProps = {
  data: Product[]
  title?: string
  marginBottom?: number
} & ViewProps

const ProductsGrid = ({
  data,
  title,
  marginBottom,
  ...rest
}: ProductsGridProps) => {
  return useMemo(
    () => (
      <View style={[styles.productsList, { marginBottom }]} {...rest}>
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
    [data, title, marginBottom, Object.keys(rest)]
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
