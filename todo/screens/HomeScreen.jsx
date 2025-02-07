import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ todos, markAsDone }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo for the Day</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity onPress={() => markAsDone(item.key)}>
              <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'sans-serif',
    color: 'darkblue'
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    fontSize: 18,
  },
  doneButton: {
    color: 'blue',
  },
});
