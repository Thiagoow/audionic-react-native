import React, { useMemo } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import { Order } from '@Data/types'
import { colors } from '@Theme/colors'
import formatPrice from '@Utils/formatPrice'

type OrderCardProps = Order & ViewProps

const OrderCard = ({ id, date, products, total, ...rest }: OrderCardProps) => {
  return useMemo(
    () => (
      <View style={styles.container} {...rest}>
        <Text style={styles.title}>
          Order Number: <Text style={styles.orderNumber}>{'' + id}</Text>
        </Text>

        <View style={styles.orderInfo}>
          <View style={styles.infoTexts}>
            <Text style={styles.infoLabel}>Payment Type:</Text>
            <Text style={styles.infoLabel}>Credit Card (1x)</Text>
          </View>

          <View style={styles.infoTexts}>
            <Text style={styles.infoLabel}>{date}</Text>
            <Text style={styles.infoTotal}>{formatPrice(total)}</Text>
          </View>
        </View>

        <View style={styles.productsContainer}>
          {products.map((product) => (
            <View style={styles.product} key={product.id}>
              <View style={styles.infoTexts}>
                <Text style={styles.productName}>{product.name}</Text>

                <Text style={styles.productLabel}>
                  {formatPrice(product.colors[0].price)}
                </Text>
              </View>

              <View style={styles.infoTexts}>
                <Text style={styles.productLabel}>
                  Color: {product.colors[0].color}
                </Text>

                <Text style={styles.productLabel}>
                  Quantity: {product.colors[0].quantity}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    ),
    [id, date, Object.keys(products), total, Object.keys(rest)]
  )
}

export default OrderCard

const styles = StyleSheet.create({
  container: {
    padding: 21,
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    borderRadius: 20,
    marginBottom: 10
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    marginBottom: 26
  },
  orderNumber: {
    color: colors.primaryColor
  },
  orderInfo: {
    rowGap: 10,
    marginBottom: 24
  },
  infoTexts: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoLabel: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.greyColor,
    fontSize: 12
  },
  infoTotal: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.primaryColor,
    fontSize: 12
  },
  productsContainer: {
    width: '100%',
    rowGap: 16
  },
  product: {
    rowGap: 10
  },
  productName: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackColor,
    fontSize: 12
  },
  productLabel: {
    fontFamily: 'Poppins_400Regular',
    color: colors.blackColor,
    fontSize: 12
  }
})
