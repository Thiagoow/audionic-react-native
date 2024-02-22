import { useMemo, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageProps,
  Image
} from 'react-native'
import { colors } from '../theme/colors'
import { Product, ProductColor } from '../data/types'
import BlobBackground from '../assets/brand/backgroundBlob.svg'

interface ProductCard
  extends Omit<Product, 'image_link' | 'colors' | 'average_rating'> {
  imgUrl: ImageProps['source']
  productColors: Product['colors']
  averageRating: Product['average_rating']
}

const ProductCard = ({
  id,
  name,
  imgUrl,
  averageRating,
  productColors
}: ProductCard) => {
  const [liked, setLiked] = useState(false)

  function returnStars(averageRating: Product['average_rating']) {
    return Array.from({ length: 5 }, (item, index) => (
      <Icon
        key={index}
        solid={index < Math.round(averageRating)}
        name="star"
        size={8}
        style={{ color: colors.starsColor }}
      />
    ))
  }

  return useMemo(
    () => (
      <View style={styles.productCard}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.likeButton,
            { backgroundColor: liked ? colors.heartColor : colors.greyColor }
          ]}
          onPress={() => setLiked(!liked)}
        >
          <Icon
            solid
            name="heart"
            size={10}
            style={{ color: colors.whiteColor }}
          />
        </TouchableOpacity>

        <View style={styles.productVisual}>
          <BlobBackground
            fill={colors[productColors[0].blobBg]}
            style={styles.productBlob}
          />
          <Image source={imgUrl} style={styles.productImg} />
        </View>

        <View style={styles.productInfo}>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{name}</Text>

            <View style={styles.starsContainer}>
              {returnStars(averageRating)}
            </View>

            <Text style={styles.productPrice}>
              {new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD'
              }).format(productColors[0].price)}
            </Text>
          </View>

          <View style={styles.cartButton}>
            <TouchableOpacity
              activeOpacity={0.8}
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
    [liked, id, name, imgUrl, averageRating, productColors]
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
    fontWeight: '600',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.primaryColor
  },
  likeButton: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 12,
    right: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productInfo: {
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
    marginTop: 15,
    marginBottom: 10
  },
  productImg: {
    position: 'absolute',
    maxWidth: 62,
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  starsContainer: {
    flexDirection: 'row',
    columnGap: 3
  }
})

export default ProductCard
