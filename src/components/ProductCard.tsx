import { useMemo, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageProps,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Theme/colors'
import { Product } from '@Data/types'
import StarsRating from '@ComponentsStarsRating'
import LikeButton from '@ComponentsLikeButton'
import formatUSD from '@Utils/formatPrice'
import BlobBackground from '@Assets/brand/backgroundBlob.svg'

export interface ProductCardProps
  extends Omit<Product, 'image_link' | 'colors' | 'average_rating'> {
  imgUrl: ImageProps['source']
  productColors: Product['colors']
  averageRating: Product['average_rating']
}

const ProductCard = ({
  id,
  brand,
  index,
  name,
  type,
  imgUrl,
  averageRating,
  productColors
}: ProductCardProps) => {
  const [liked, setLiked] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  function goToDetails() {
    navigation.push('Details', { index })
  }

  return useMemo(
    () => (
      <View style={styles.productCard}>
        <LikeButton {...{ liked, setLiked }} />

        <TouchableOpacity style={styles.productVisual} onPress={goToDetails}>
          <BlobBackground
            fill={colors[productColors[0].blobBg]}
            style={styles.productBlob}
          />
          <Image
            source={imgUrl}
            style={[
              styles.productImg,
              { maxWidth: brand === 'Beats' ? 62 : 72 }
            ]}
          />
        </TouchableOpacity>

        <View style={styles.productInfo}>
          <View style={styles.productDetails}>
            <Text
              style={styles.productName}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              {name}
            </Text>

            <View style={styles.starsContainer}>
              <StarsRating {...{ averageRating }} />
            </View>

            <Text style={styles.productPrice}>
              {formatUSD(productColors[0].price)}
            </Text>
          </View>

          <View style={styles.cartButton}>
            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              onPress={() => console.log('add to cart', id, liked)}
            >
              <Icon
                name="cart-shopping"
                size={16}
                color={colors.txtDarkColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ),
    [liked, id, brand, name, type, imgUrl, averageRating, productColors]
  )
}

const styles = StyleSheet.create({
  productCard: {
    padding: 15,
    width: 150,
    borderRadius: 10,
    backgroundColor: colors.whiteColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25
  },
  productName: {
    fontSize: 12,
    maxWidth: 100,
    fontWeight: '600',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.primaryColor
  },
  productInfo: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  productDetails: {
    marginLeft: 5,
    rowGap: 6
  },
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  productVisual: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  productBlob: {
    width: 92,
    height: 87,
    marginTop: 15,
    marginBottom: 10
  },
  productImg: {
    position: 'absolute',
    height: '100%',
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  starsContainer: {
    flexDirection: 'row',
    columnGap: 3
  }
})

export default ProductCard
