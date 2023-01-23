import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text>{state === "No Realizado" ? "Marcar como Realizado" : "Marcar como No Realizado"}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white'
  },

  title: {
    fontWeight: '700',
    fontSize: 20
  },

  description: {
    marginTop: 10,
    fontStyle: 'italic'
  },

  button: {
    margin: 10,
    backgroundColor: 'lightblue'
  }
})

export default Card;