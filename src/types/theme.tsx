import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const CardContainer = styled.View`
  padding: 20px;
  margin: 10px;
  border-width: 1px;
  background-color: black;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  margin: 10px;
  color: white;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
`;

export const CardView = styled.View`
  padding: 20px;
  margin: 10px;
  border-width: 1px;
  background-color: black;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const Description = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
  color: 'white';
`;