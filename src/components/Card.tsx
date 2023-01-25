import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Title, Description, CardView } from '../types/theme';


interface Props {
  title: string,
  description: string,
  state: string,
  onPress: () => void
}

const Card: React.FC<Props> = ({ title, description, state, onPress }) => {
  return (
    <CardView>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Description>Estado: {state}</Description>
      <Button
        title={state === "No Realizado" ? "Marcar como Realizado" : "Marcar como No Realizado"}
        onPress={onPress}/>
    </CardView>
  );
};

export default Card;