import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLayout from '@src/components/AppLayout'
import { GlobalContext } from '@Context/GlobalState'

export default function ProfileScreen() {
  const { orders } = useContext(GlobalContext)

  console.log(orders)

  return (
    <AppLayout fullHeight contentPadding>
      <Text>{orders.length}</Text>
    </AppLayout>
  )
}

const styles = StyleSheet.create({})
