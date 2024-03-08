import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Product } from '@Data/types'
import { colors } from '@Theme/colors'
import AppLayout from '@ComponentsAppLayout'

export default function CartScreen() {
  const cart: Product[] = []

  function deleteAllOnCart() {
    console.log('delete all from cart')
  }

  return (
    <AppLayout fullHeight>
      <TouchableOpacity onPress={deleteAllOnCart} style={styles.deleteAllBtn}>
        <Text style={styles.deleteAllLabel}>Delete All from Cart</Text>
      </TouchableOpacity>

      {cart.length ? (
        cart.map((product) => <Text key={product.id}>{product.name}</Text>)
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
    color: colors.blackCardBg
  }
})
