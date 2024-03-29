import { useEffect, useState, useContext } from 'react'
import { RouteProp } from '@react-navigation/native'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { colors } from '@Theme/colors'
import { Product, ProductColor } from '@Data/types'
import AppLayout from '@ComponentsAppLayout'
import StarsRating from '@ComponentsStarsRating'
import LikeButton from '@ComponentsLikeButton'
import formatUSD from '@Utils/formatPrice'
import BlobBackground from '@Assets/brand/backgroundBlob.svg'
import { GlobalContext } from '@Context/GlobalState'

interface DetailScreenProps {
  route: RouteProp<{ params: Pick<Product, 'index'> }, 'params'>
  navigation?: NativeStackNavigationProp<any>
}

export default function DetailScreen({ route, navigation }: DetailScreenProps) {
  const { index } = route?.params
  const { isOnFavorite, toggleFavorite, addToCart, buyNow, products } =
    useContext(GlobalContext)
  const product = products[index]
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  useEffect(() => {
    setSelectedColor(product.colors[0])
  }, [index])

  function updateProductIndex(isNext: boolean) {
    const newIndex = isNext ? index + 1 : index - 1
    if (newIndex >= 0 && newIndex < products.length) {
      navigation?.setParams({ index: newIndex })
    }
  }

  function getColorButtonStyle(item: ProductColor) {
    const isUniqueColor = item.color === 'unique'
    const isSelectedColor = selectedColor.color === item.color

    return {
      backgroundColor: isUniqueColor ? colors.blackColor : item.color,
      borderColor: isSelectedColor ? colors.blackColor : 'transparent',
      opacity: item.available ? 1 : 0.2
    }
  }

  return (
    <AppLayout fullHeight>
      <View style={styles.productVisual}>
        <BlobBackground
          fill={colors[product.colors[0].blobBg]}
          style={[
            styles.productBlob,
            { transform: [{ scaleX: index % 2 === 0 ? 1 : -1 }] }
          ]}
        />
        <Image
          source={product.image_link}
          style={[
            styles.productImg,
            { maxWidth: product.brand === 'Beats' ? 138 : 200 }
          ]}
        />
      </View>

      <View style={styles.chevronActions}>
        {(product.brand === 'Beats' && product.index > 0) ||
        (product.brand === 'JBL' && product.index > 4) ? (
          <TouchableOpacity
            onPress={() => updateProductIndex(false)}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            style={[styles.chevronButton, { left: 35 }]}
          >
            <Icon name="chevron-left" size={20} color={colors.primaryColor} />
          </TouchableOpacity>
        ) : null}

        {(product.brand === 'Beats' && product.index < 3) ||
        (product.brand === 'JBL' && product.index < products.length - 1) ? (
          <TouchableOpacity
            onPress={() => updateProductIndex(true)}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            style={[styles.chevronButton, { right: 35 }]}
          >
            <Icon name="chevron-right" size={20} color={colors.primaryColor} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.productInfo}>
        <View style={styles.starsContainer}>
          <StarsRating
            {...{ averageRating: product.average_rating, size: 12 }}
          />
        </View>

        <Text style={styles.productName}>{product.name}</Text>

        <Text style={styles.productPrice}>
          {formatUSD(product.colors[0].price)}
        </Text>
      </View>

      <View style={styles.productDetails}>
        <View style={styles.productColors}>
          <Text style={styles.label}>Colors</Text>

          <View style={styles.colorsContainer}>
            {product.colors.map((item: ProductColor, index) => (
              <TouchableOpacity
                key={index}
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                disabled={!item.available}
                style={[styles.colorButton, getColorButtonStyle(item)]}
                onPress={() => setSelectedColor(item)}
              />
            ))}
          </View>
        </View>

        <LikeButton
          {...{
            liked: isOnFavorite(product.id),
            toggleLiked: () => toggleFavorite(product),
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
            onPress={() => addToCart({ ...product, colors: [selectedColor] })}
          >
            <Text style={styles.cartText}>Add to cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.actionBtn, { backgroundColor: colors.primaryColor }]}
            onPress={() => buyNow([product])}
          >
            <Text style={styles.buyText}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
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
    height: '100%',
    resizeMode: 'contain',
    transform: [{ rotateZ: '35deg' }]
  },
  productInfo: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackColor
  },
  productPrice: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
    color: colors.primaryColor
  },
  descriptionScroll: {
    marginTop: 12,
    maxHeight: 135,
    marginBottom: 20
  },
  productDescription: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
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
    fontFamily: 'Poppins_600SemiBold',
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
    fontFamily: 'Poppins_500Medium',
    color: colors.txtDarkColor
  },
  buyText: {
    fontSize: 14,

    fontFamily: 'Poppins_600SemiBold',
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
