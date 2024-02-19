import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { colors } from '../theme/colors'
import Header from '../components/Header'
import CategoryOne from '../assets/categories/beats.svg'
import CategoryTwo from '../assets/categories/jbl.svg'
import CategoryThree from '../assets/categories/akg.svg'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header home />

      <View style={styles.backgroundRadius}>
        <View style={styles.categories}>
          <Text style={styles.label}>Filter by brand</Text>

          <ScrollView
            contentContainerStyle={styles.categoryScrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('beats')}
            >
              <CategoryOne fill={colors.blackColor} fontSize={25} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('jbl')}
            >
              <CategoryTwo fill={colors.blackColor} fontSize={35} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => console.log('beats')}
            >
              <CategoryThree fill={colors.blackColor} width={50} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.beatsProducts}>
          <Text style={styles.label}>Beats products</Text>
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
    paddingLeft: 27,
    paddingVertical: 23,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.containerColor
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blackColor
  },
  categories: {
    rowGap: 16
  },
  categoryScrollView: {
    columnGap: 20,
    paddingRight: 20
  },
  categoryCard: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.whiteColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25
  },
  beatsProducts: {
    marginTop: 40,
    rowGap: 14
  }
})
