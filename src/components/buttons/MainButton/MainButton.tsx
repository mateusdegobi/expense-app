import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  children: string;
}

export default function MainButton(props: Props) {
  return (
    <Button onPress={props.onPress}>
      <Text>{props.children}</Text>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  background-color: #6e34b8;
  justify-content: center;
  align-items: center;
  padding: 18px 0px;
  border-radius: 10px;
  width: 100%;
  margin-left: 25px;
  position: absolute;
  bottom: 30px;
`;
const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
