import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

interface Props {
  title: string,
  description: string,
}

const Card: React.FC<Props> = ({ title, description }) => {
  const [state, setState] = useState("No Realizado");

  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>Estado: {state}</Text>
      <Button
        title={state === "No Realizado" ? "Marcar como Realizado" : "Marcar como No Realizado"}
        onPress={() => setState(state === "No Realizado" ? "Realizado" : "No Realizado")}
      />
    </View>
  );
};

export default Card;
