import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { key: Math.random().toString(), text }]);
  };

  const markAsDone = (key) => {
    setTodos(todos.filter(todo => todo.key !== key));
  };

  const updateTodo = (key, newText) => {
    setTodos(todos.map(todo => (todo.key === key ? { ...todo, text: newText } : todo)));
  };

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        options={{ headerShown: false }}
      >
        {() => <HomeScreen todos={todos} markAsDone={markAsDone} />}
      </Tab.Screen>

      <Tab.Screen 
        name="Explore"
        options={{ headerShown: false }}
      >
        {() => <ExploreScreen todos={todos} addTodo={addTodo} updateTodo={updateTodo} markAsDone={markAsDone} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
