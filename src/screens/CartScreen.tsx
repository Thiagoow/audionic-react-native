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

export default function CartScreen() {
  const { cart, deleteAllFromCart } = useContext(GlobalContext)

  function increaseQty() {
    console.log('increase qty')
  }

  function decreaseQty() {
    console.log('decrease qty')
  }

  return (
    <AppLayout fullHeight>
      <TouchableOpacity onPress={deleteAllFromCart} style={styles.deleteAllBtn}>
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
                key: product.id,
                imgUrl: product.image_link,
                productColors: product.colors,
                averageRating: product.average_rating,
                increaseQty,
                decreaseQty
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
  deleteAllLabel: {
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
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    color: colors.blackCardBg
  },
  itemsScroll: {
    width: '100%',
    rowGap: 22,
    paddingBottom: 20,
    paddingHorizontal: 35,
    alignSelf: 'center'
  }
})
