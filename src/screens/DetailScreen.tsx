import { useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { colors } from '../theme/colors'
import { Product, ProductColor } from '../data/types'
import Icon from 'react-native-vector-icons/Entypo'
import Header from '../components/Header'
import StarsRating from '../components/StarsRating'
import LikeButton from '../components/LikeButton'
import allProducts from '../data/data'
import formatUSD from '../utils/formatPrice'
import BlobBackground from '../assets/brand/backgroundBlob.svg'

interface DetailScreenProps {
  route: RouteProp<{ params: Pick<Product, 'type' | 'id'> }, 'params'>
}

export default function DetailScreen({ route }: DetailScreenProps) {
  const product = allProducts.find(
    (product: Product) => product.id === route.params.id
  ) as Product
  const {
    colors: productColors,
    image_link: imgUrl,
    average_rating: averageRating
  } = product
  const [liked, setLiked] = useState(false)
  const [selectedColor, setSelectedColor] = useState(productColors[0].color)

  function addToCart() {
    console.log(`added ${product.id} to cart`)
  }

  function buyNow() {
    console.log(`buy ${product.id} now`)
  }

  function getColorButtonStyle(item: ProductColor) {
    const isUniqueColor = item.color === 'unique'
    const isSelectedColor = selectedColor === item.color

    return {
      backgroundColor: isUniqueColor ? colors.blackColor : item.color,
      borderColor: isSelectedColor ? colors.blackColor : 'transparent',
      opacity: item.available ? 1 : 0.2
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.backgroundRadius}>
        <View style={styles.productVisual}>
          <BlobBackground
            fill={colors[productColors[0].blobBg]}
            style={styles.productBlob}
          />
          <Image source={imgUrl} style={styles.productImg} />
        </View>

        <View style={styles.chevronActions}>
          {product.index > 0 ? (
            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              style={[styles.chevronButton, { left: 35 }]}
            >
              <Icon name="chevron-left" size={20} color={colors.primaryColor} />
            </TouchableOpacity>
          ) : null}

          {product.index < 3 ? (
            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              style={[styles.chevronButton, { right: 35 }]}
            >
              <Icon
                name="chevron-right"
                size={20}
                color={colors.primaryColor}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.productInfo}>
          <View style={styles.starsContainer}>
            <StarsRating {...{ averageRating, size: 12 }} />
          </View>

          <Text style={styles.productName}>{product.name}</Text>

          <Text style={styles.productPrice}>
            {formatUSD(productColors[0].price)}
          </Text>
        </View>

        <View style={styles.productDetails}>
          <View style={styles.productColors}>
            <Text style={styles.label}>Colors</Text>

            <View style={styles.colorsContainer}>
              {productColors.map((item: ProductColor, index) => (
                <TouchableOpacity
                  key={index}
                  hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                  disabled={!item.available}
                  style={[styles.colorButton, getColorButtonStyle(item)]}
                  onPress={() => setSelectedColor(item.color)}
                />
              ))}
            </View>
          </View>

          <LikeButton
            {...{
              liked,
              setLiked,
              size: 26,
              iconSize: 14,
              position: { top: 40, right: 35 }
            }}
          />

          <Text style={styles.label}>Details</Text>
          <ScrollView
            style={styles.descriptionScroll}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.productDescription}>{product.description}</Text>
          </ScrollView>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.actionBtn, { backgroundColor: colors.greyColor }]}
              onPress={addToCart}
            >
              <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.actionBtn,
                { backgroundColor: colors.primaryColor }
              ]}
              onPress={buyNow}
            >
              <Text style={styles.buyText}>Buy now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor
  },
  backgroundRadius: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.containerColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  productVisual: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 20
  },
  productBlob: {
    width: 206,
    height: 195,
    marginTop: 15
  },
  productImg: {
    position: 'absolute',
    maxWidth: 138,
    height: '100%',
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  productInfo: {
    rowGap: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primaryColor
  },
  descriptionScroll: {
    marginTop: 12,
    maxHeight: 135,
    marginBottom: 20
  },
  productDescription: {
    fontSize: 13,
    color: colors.blackColor,
    lineHeight: 22
  },
  productDetails: {
    flex: 1,
    marginTop: 13,
    width: '100%',
    paddingHorizontal: 35,
    backgroundColor: colors.whiteColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  productColors: {
    rowGap: 12,
    marginTop: 33,
    marginBottom: 25
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.blackColor
  },
  starsContainer: {
    flexDirection: 'row',
    columnGap: 5
  },
  colorsContainer: {
    flexDirection: 'row',
    columnGap: 20
  },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2
  },
  actionButtons: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    columnGap: 25
  },
  actionBtn: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  cartText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.txtDarkColor
  },
  buyText: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colors.whiteColor
  },
  chevronActions: {
    flex: 1,
    alignSelf: 'center',
    bottom: 190,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute'
  },
  chevronButton: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    borderRadius: 50
  }
})
