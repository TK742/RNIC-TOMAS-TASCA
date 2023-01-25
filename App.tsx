import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, View, Text, FlatList, TextInput, Button, SafeAreaView, KeyboardAvoidingView, StyleSheet, AppState, Platform } from 'react-native';
import Card from './src/components/Card';
import mockedData from './src/constants/MockedData';
import { Wrapper, CardContainer, Input } from './src/types/theme';

interface Task {
  id: number,
  title: string,
  description: string,
  state: string
}

const MainScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockedData);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionInputRef = useRef<TextInput>(null);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        setTasks(mockedData);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);


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
  }


  const handleTaskStateChange = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          state: task.state === "No Realizado" ? "Realizado" : "No Realizado"
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={tasks}
        ListEmptyComponent={<Text>La lista está vacía (⊙_⊙;)</Text>}
        renderItem={({ item }) => <Card title={item.title} description={item.description} state={item.state} onPress={() => handleTaskStateChange(item.id)} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled
      />
      <KeyboardAvoidingView>
        <CardContainer>
          <Input
            value={title}
            onChangeText={setTitle}
            placeholder="Título"
            returnKeyType="next"
            onSubmitEditing={() => { descriptionInputRef.current?.focus() }}
          />
          <Input
            value={description}
            onChangeText={setDescription}
            placeholder="Descripción"
            placeholderTextColor={Platform.OS === 'ios' ? 'black' : 'white'}
            returnKeyType="done"
            ref={descriptionInputRef}
            onSubmitEditing={() => { handleAddTask() }}
          />
          <Button
            title="Agregar Tarea"
            onPress={handleAddTask}
          />
        </CardContainer>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default MainScreen;
