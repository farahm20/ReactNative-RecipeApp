// MealItem.tsx
import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealSpecifications from './MealSpecifications'

interface MealItemProps {
  id: string
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
  mealId: string
}

const MealItem: React.FC<MealItemProps> = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  mealId,
}) => {
  const navigation = useNavigation()

  console.log(id, title)

  function mealButtonPressed() {
    navigation.navigate('MealDetail', { mealId: mealId })
  }

  return (
    <View style={styles.mealContainer}>
      <View style={styles.innerContainer}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={mealButtonPressed}
        >
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <MealSpecifications
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    borderColor: '#d8d5d5',
    borderWidth: 5,
    borderRadius: 15,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    margin: 15,
  },
  innerContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fe4a01',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MealItem
