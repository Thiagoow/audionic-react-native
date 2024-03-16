import { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Order } from '@Data/types'
import { colors } from '@Theme/colors'
import AppLayout from '@Components/AppLayout'
import OrderCard from '@Components/OrderCard'
import { GlobalContext } from '@Context/GlobalState'

export default function ProfileScreen() {
  const { orders } = useContext(GlobalContext)

  function toggleSortByDate() {
    console.log('Sort by date')
    console.log(orders)
  }

  return (
    <AppLayout fullHeight>
      <TouchableOpacity
        disabled={!orders.length}
        onPress={toggleSortByDate}
        style={[
          styles.sortBtn,
          {
            backgroundColor: orders.length
              ? colors.txtDarkColor
              : colors.blackCardBg
          }
        ]}
      >
        <Text style={styles.sortLabel}>Sort by: </Text>
      </TouchableOpacity>

      {orders.length ? (
        <ScrollView
          contentContainerStyle={styles.itemsScroll}
          showsVerticalScrollIndicator={false}
        >
          {orders.map((order: Order) => (
            <OrderCard {...order} key={order.id} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyOrders}>
          <Icon
            solid
            name="boxes-packing"
            size={58}
            style={{ color: colors.blackCardBg }}
          />

          <Text style={styles.emptyMessage}>
            The orders you made will appear here
          </Text>
        </View>
      )}
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  sortBtn: {
    width: '85%',
    marginTop: 23,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: colors.txtDarkColor,
    paddingVertical: 12,
    marginBottom: 30
  },
  sortLabel: {
    color: colors.whiteColor,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
  },
  emptyOrders: {
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
    rowGap: 30,
    width: '100%',
    paddingBottom: 23,
    paddingHorizontal: 35,
    alignSelf: 'center'
  }
})
