import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ListProps {
  data: string[] // Change the type to match your data type
}

function List({ data }: ListProps) {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  )
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#f3dcce',
  },
  itemText: {
    color: '#351401',
    textAlign: 'left',
  },
})
