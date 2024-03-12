import { useContext } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Theme/colors'
import AppLayout from '@ComponentsAppLayout'
import ShoppingCard from '@ComponentsShoppingCard'
import { GlobalContext } from '@Context/GlobalState'
import formatPrice from '@Utils/formatPrice'

export default function CartScreen() {
  const {
    cart,
    deleteAllFromCart,
    increaseQty,
    decreaseQty,
    getTotalCartPrice
  } = useContext(GlobalContext)

  function buyNow() {
    console.log(`buy now`)
  }

  return (
    <AppLayout fullHeight>
      <TouchableOpacity
        disabled={!cart.length}
        onPress={deleteAllFromCart}
        style={[
          styles.deleteAllBtn,
          {
            backgroundColor: cart.length
              ? colors.txtDarkColor
              : colors.blackCardBg
          }
        ]}
      >
        <Text style={styles.deleteAllLabel}>Delete All from Cart</Text>
      </TouchableOpacity>

      {cart.length ? (
        <ScrollView
          contentContainerStyle={styles.itemsScroll}
          showsVerticalScrollIndicator={false}
        >
          {cart.map((product) => (
            <ShoppingCard
              {...product}
              {...{
                key: product.id + product.colors[0].color,
                imgUrl: product.image_link,
                productColors: product.colors,
                averageRating: product.average_rating,
                increaseQty: () =>
                  increaseQty(product.id, product.colors[0].color),
                decreaseQty: () =>
                  decreaseQty(product.id, product.colors[0].color)
              }}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyCart}>
          <Icon
            solid
            name="bag-shopping"
            size={58}
            style={{ color: colors.blackCardBg }}
          />

          <Text style={styles.emptyMessage}>
            The products you add to your cart will appear here
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={buyNow}
        disabled={!cart.length}
        activeOpacity={0.6}
        style={[
          styles.buyNowBtn,
          {
            backgroundColor: cart.length
              ? colors.primaryColor
              : colors.blackCardBg
          }
        ]}
      >
        <Text style={styles.buyNowLabel}>
          BUY NOW: {formatPrice(getTotalCartPrice())}
        </Text>
      </TouchableOpacity>
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  deleteAllBtn: {
    width: '85%',
    marginTop: 23,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: colors.txtDarkColor,
    paddingVertical: 12,
    marginBottom: 20
  },
  buyNowBtn: {
    position: 'absolute',
    bottom: 23,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 12
  },
  deleteAllLabel: {
    color: colors.whiteColor,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
  },
  buyNowLabel: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.whiteColor,
    textAlign: 'center'
  },
  emptyCart: {
    flex: 1,
    rowGap: 12,
    marginBottom: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyMessage: {
    fontSize: 14,
    maxWidth: 200,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackCardBg
  },
  itemsScroll: {
    rowGap: 20,
    width: '100%',
    paddingBottom: 92,
    paddingHorizontal: 35,
    alignSelf: 'center'
  }
})
