import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealSpecifications from '../components/MealSpecifications'
import List from '../components/MealSpecs/List'
import Subtitle from '../components/MealSpecs/Subtitle'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import { useNavigation, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/RootStackParamList'

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetail'>

const MealDetailScreen: React.FC<{
  route: MealDetailScreenRouteProp
  navigation: any
}> = ({ route, navigation }) => {
  const mealId = route.params?.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function headerButtonPressHandler() {
    console.log('Pressed')
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon={'heart'}
            color={'orange'}
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <MealSpecifications
          duration={selectedMeal?.duration}
          complexity={selectedMeal?.complexity}
          affordability={selectedMeal?.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients || []} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps || []} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    backgroundColor: '#d6604d',
    padding: 10,
    margin: 10,
    borderRadius: 18,
  },
  image: {
    width: '100%',
    borderRadius: 18,
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
    backgroundColor: '#d8d5d5',
    padding: 10,
    margin: 10,
    borderRadius: 18,
  },
  listContainer: {
    width: '80%',
  },
})
