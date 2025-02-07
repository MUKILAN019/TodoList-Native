import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';

export default function ExploreScreen({ todos, addTodo, updateTodo, markAsDone }) {
  const [text, setText] = useState('');
  const [editKey, setEditKey] = useState(null);

  const handleAddOrUpdate = () => {
    if (editKey) {
      updateTodo(editKey, text);
      setEditKey(null);
    } else {
      addTodo(text);
    }
    setText('');
  };

  const handleEdit = (key, currentText) => {
    setEditKey(key);
    setText(currentText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Todos</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleEdit(item.key, item.text)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => markAsDone(item.key)}>
              <Text style={styles.doneButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Add or update todo"
        value={text}
        onChangeText={setText}
      />
      <Button title={editKey ? "Update Todo" : "Add Todo"} onPress={handleAddOrUpdate} />
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
  editButton: {
    color: 'orange',
  },
  doneButton: {
    color: 'blue',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});
