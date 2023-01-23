import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TextInput, Button, Keyboard } from 'react-native';
import Card from './src/Card';

interface Task {
  id: number,
  title: string,
  description: string,
  state: string
}

const MainScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleInputRef = useRef<TextInput>(null);
  const descriptionInputRef = useRef<TextInput>(null);

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
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <View>
        <TextInput 
          value={title}
          onChangeText={setTitle}
          onBlur={handleBlur}
          onSubmitEditing={() => { descriptionInputRef.current?.focus()}}
          placeholder="Título"
          returnKeyType="next"
          ref={titleInputRef}
        />
        <TextInput 
          value={description}
          onChangeText={setDescription}
          onBlur={handleBlur}
          onSubmitEditing={handleAddTask}
          placeholder="Descripción"
          returnKeyType="done"
          ref={descriptionInputRef}
        />
        <Button 
          title="Agregar Tarea"
          onPress={handleAddTask}
        />
      </View>
    </View>
  );
};

export default MainScreen;
