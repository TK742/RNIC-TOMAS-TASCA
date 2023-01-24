import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';

interface Props {
  title: string,
  description: string,
  state: string,
  onPress: () => void
}

const Card: React.FC<Props> = ({ title, description, state, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description}>Estado: {state}</Text>
      <Button
        title={state === "No Realizado" ? "Marcar como Realizado" : "Marcar como No Realizado"}
        onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'black',
    borderRadius: 10
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Platform.OS === 'ios' ? 'black' : 'white'
  },

  description: {
    marginTop: 10,
    marginBottom: 10,
    fontStyle: 'italic',
    color: Platform.OS === 'ios' ? 'black' : 'white'
  }
})

export default Card;