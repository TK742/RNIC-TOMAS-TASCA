import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Card = ({ title, description }) => {
  const [state, setState] = useState("No Realizado");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.stateContainer}>
        <Text style={styles.state}>Estado: {state}</Text>
        <TouchableOpacity 
          style={styles.changeStateBtn}
          onPress={() => setState(state === "No Realizado" ? "Realizado" : "No Realizado")}
        >
          <Text style={styles.changeStateBtnText}>Cambiar Estado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  state: {
    fontSize: 14,
    marginRight: 10,
  },
  changeStateBtn: {
    backgroundColor: '#007aff',
    padding: 8,
    borderRadius: 5,
  },
  changeStateBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center',
  },
};

export default Card;
