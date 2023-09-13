import { Pressable, View, Text, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color, whenPressed }) {
  return (
    <View style={styles.gridContainer}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={whenPressed}
      >
        <View style={[styles.textBox, { backgroundColor: color }]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 180,

    borderRadius: 100,
    borderColor: 'black',
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textBox: {
    flex: 1,
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 18,
  },
})
