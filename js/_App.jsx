import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, Keyboard, Touchable } from 'react-native';
import Card from './src/Card';

const MainScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      state: "No Realizado",
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    Keyboard.dismiss();
  }

  const handleBlur = () => {
    Keyboard.dismiss();
  }

  return (
    <View>
      {tasks.length === 0 ? (
        <Text>La lista está vacía</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Card title={item.title} description={item.description} state={item.state} />}
          keyExtractor={(item) => item.id}
        />
      )}
      <View>
        <TextInput 
          value={title}
          onChangeText={setTitle}
          onBlur={handleBlur}
          onSubmitEditing={() => { this.descriptionInput.focus()}}
          placeholder="Título"
          returnKeyType="next"
          ref={(input) => { this.titleInput = input; }}
        />
        <TextInput 
          value={description}
          onChangeText={setDescription}
          onBlur={handleBlur}
          onSubmitEditing={handleAddTask}
          placeholder="Descripción"
          returnKeyType="done"
          ref={(input) => { this.descriptionInput = input; }}
        />
        <Touchable 
          title="Agregar Tarea"
          onPress={handleAddTask}
        />
      </View>
    </View>
  );
};

export default MainScreen;
