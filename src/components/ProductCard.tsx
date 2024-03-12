import { useMemo, useContext } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { colors } from '@Theme/colors'
import { ProductCardProps } from '@Data/types'
import StarsRating from '@ComponentsStarsRating'
import LikeButton from '@ComponentsLikeButton'
import CartButton from '@ComponentsCartButton'
import formatUSD from '@Utils/formatPrice'
import BlobBackground from '@Assets/brand/backgroundBlob.svg'
import { GlobalContext } from '@Context/GlobalState'

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
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { isOnFavorite, toggleFavorite, addToCart, products } =
    useContext(GlobalContext)
  const product = products[index]
  const liked = isOnFavorite(id)

  function goToDetails() {
    navigation.push('Details', { index })
  }

  return useMemo(
    () => (
      <View style={styles.productCard}>
        <LikeButton
          {...{
            liked,
            toggleLiked: () => toggleFavorite(product)
          }}
        />

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
            <CartButton
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              onPress={() => addToCart(product)}
            />
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
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 10,
    fontFamily: 'Poppins_600SemiBold',
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
