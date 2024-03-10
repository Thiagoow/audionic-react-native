import { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ViewProps,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { ProductCardProps } from '@Data/types'
import { colors } from '@Theme/colors'
import formatUSD from '@Utils/formatPrice'
import BlobBackground from '@Assets/brand/backgroundBlob.svg'

type ShoppingCardProps = ProductCardProps & {
  increaseQty: () => void
  decreaseQty: () => void
} & ViewProps

const ShoppingCard = ({
  index,
  imgUrl,
  name,
  brand,
  productColors,
  description,
  increaseQty,
  decreaseQty,
  ...rest
}: ShoppingCardProps) => {
  function deleteFromCart() {
    console.log('delete from cart', index)
  }

  return useMemo(
    () => (
      <View>
        <View style={styles.container} {...rest}>
          <View style={styles.productVisual}>
            <BlobBackground
              fill={colors[productColors[0].blobBg]}
              style={styles.productBlob}
            />

            <Image
              source={imgUrl}
              style={[
                styles.productImg,
                { maxWidth: brand === 'Beats' ? 39 : 49 }
              ]}
            />
          </View>

          <View style={styles.productInfo}>
            <View style={styles.productNamePrice}>
              <Text
                style={styles.productName}
                numberOfLines={1}
                ellipsizeMode="clip"
              >
                {name}
              </Text>

              <Text
                style={styles.productPrice}
                numberOfLines={1}
                ellipsizeMode="clip"
              >
                {formatUSD(productColors[0].price)}
              </Text>
            </View>

            <Text style={styles.productDescription} numberOfLines={1}>
              {description}
            </Text>
          </View>

          <View style={styles.actionBtns}>
            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              onPress={increaseQty}
              style={styles.actionBtn}
            >
              <Icon name="plus" size={13} color={colors.txtDarkColor} />
            </TouchableOpacity>

            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              onPress={decreaseQty}
              style={styles.actionBtn}
            >
              <Icon name="minus" size={13} color={colors.txtDarkColor} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={deleteFromCart}>
          <Text style={styles.deleteFromCarBtn}>Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    ),
    [
      imgUrl,
      name,
      brand,
      productColors,
      description,
      increaseQty,
      decreaseQty,
      Object.keys(rest)
    ]
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.whiteColor,
    borderRadius: 20
  },
  productVisual: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  productBlob: {
    width: 58,
    height: 60
  },
  productImg: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  productInfo: {
    rowGap: 8,
    width: '60%',
    marginRight: 10
  },
  productNamePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName: {
    fontSize: 12,
    maxWidth: 100,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 12,
    maxWidth: 100,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    color: colors.primaryColor
  },
  productDescription: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    color: colors.blackColor
  },
  actionBtns: {
    height: '100%',
    maxHeight: '100%',
    justifyContent: 'space-between',
    position: 'relative'
  },
  actionBtn: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: colors.containerColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteFromCarBtn: {
    fontSize: 10,
    marginTop: 8,
    marginRight: 8,
    textAlign: 'right',
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    color: colors.txtDarkColor
  }
})

export default ShoppingCard
