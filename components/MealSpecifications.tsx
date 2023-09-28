import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'

interface MealSpecificationsProps {
  duration: number
  complexity: string
  affordability: string
  textStyle?: object
  style?: (style: ViewStyle) => ViewStyle
}

const MealSpecifications: React.FC<MealSpecificationsProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  const containerStyle = style
    ? style(styles.specificationContainer)
    : styles.specificationContainer

  return (
    <View>
      <View style={[containerStyle]}>
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
