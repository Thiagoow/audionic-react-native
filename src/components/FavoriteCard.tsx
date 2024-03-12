import { useMemo, useContext } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableOpacityProps
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProductCardProps } from '@Data/types'
import { colors } from '@Theme/colors'
import LikeButton from '@ComponentsLikeButton'
import CartButton from '@ComponentsCartButton'
import BlobBackground from '@Assets/brand/backgroundBlob.svg'
import { GlobalContext } from '@Context/GlobalState'

type FavoriteCardProps = ProductCardProps & {
  liked: boolean
  setLiked: (value: any) => void
} & TouchableOpacityProps

const FavoriteCard = ({
  id,
  liked,
  index,
  imgUrl,
  name,
  brand,
  productColors,
  description,
  setLiked,
  ...rest
}: FavoriteCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { toggleFavorite, addToCart, products } = useContext(GlobalContext)
  const product = products[index]

  function goToDetails() {
    navigation.push('Details', { index })
  }

  return useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={goToDetails}
        style={styles.container}
        {...rest}
      >
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
          <Text
            style={styles.productName}
            numberOfLines={1}
            ellipsizeMode="clip"
          >
            {name}
          </Text>

          <Text style={styles.productDescription} numberOfLines={1}>
            {description}
          </Text>
        </View>

        <View style={styles.actionBtns}>
          <LikeButton
            {...{
              liked,
              toggleLiked: () => toggleFavorite(product),
              size: 20,
              iconSize: 11,
              position: { top: -1, right: -1 }
            }}
          />

          <CartButton
            {...{ onPress: () => addToCart(product), style: styles.cartBtn }}
          />
        </View>
      </TouchableOpacity>
    ),
    [
      imgUrl,
      name,
      brand,
      productColors,
      description,
      liked,
      setLiked,
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
    height: 62
  },
  productImg: {
    position: 'absolute',
    height: '100%',
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  productInfo: {
    rowGap: 8,
    width: '65%'
  },
  productName: {
    fontSize: 12,
    maxWidth: 200,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackColor
  },
  productDescription: {
    fontSize: 10,
    maxWidth: 200,
    fontFamily: 'Poppins_400Regular',
    color: colors.blackColor
  },
  actionBtns: {
    height: '100%',
    maxHeight: '100%',
    position: 'relative'
  },
  cartBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})

export default FavoriteCard
