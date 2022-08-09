import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: string;
  midText?: string | JSX.Element;
  onPress: () => void;
};

export default function SelectWithModal({children, midText, onPress}: Props) {
  return (
    <Input onPress={onPress}>
      <Text>{children}</Text>
      <Text>{midText}</Text>
      <Image
        source={require('../../../assets/icons/forms/dropdown-icon.png')}
        resizeMode="contain"
      />
    </Input>
  );
}

const Input = styled.Pressable`
  background-color: #f2f2f2;
  border-radius: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
`;

const Text = styled.Text`
  color: #2f1155;
  font-size: 18px;
  font-weight: 600;
`;

const Image = styled.Image``;
