import { View, Text, StyleSheet } from 'react-native'
const MealSpecifications = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View>
      <View style={[styles.specificationContainer, style]}>
        <Text style={[styles.detailsText, textStyle]}>{duration}mins</Text>
        <Text style={[styles.detailsText, textStyle]}>{complexity}</Text>
        <Text style={[styles.detailsText, textStyle]}>{affordability}</Text>
      </View>
    </View>
  )
}

export default MealSpecifications

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
    color: 'white',
  },
  specificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 14,
    margin: 8,
    color: 'white',
  },
})
