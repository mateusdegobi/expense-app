import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: string;
};

export default function MainButton({children}: Props) {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  background-color: #6e34b8;
  justify-content: center;
  align-items: center;
  padding: 18px 0px;
  border-radius: 10px;
  width: 80%;
  margin-left: 10%;
  margin-top: 100px;
`;
const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
