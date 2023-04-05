import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'left',
    textAlign: 'left',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#d0ccfc",
    borderColor: "#d0ccfc",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    textAlign: 'left',
    padding: 5,
  },
});

export default Task;
