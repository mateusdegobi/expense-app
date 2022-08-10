import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: string;
  onPress: () => void;
  placeholder: string;
};

export default function SelectWithModal({children, onPress, placeholder}: Props) {
  return (
    <Input onPress={onPress}>
      <Text active={children} >{children ? children : placeholder}</Text>
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
  padding: 20px 25px;
  margin: 15px 0px;
`;

type TextProps = {
  active: boolean;
}
const Text = styled.Text<TextProps>`
  color: ${props => props.active ? '#2f1155' : '#828282'};
  font-size: ${props => props.active ? '18px' : '17px'};
  font-weight: ${props => props.active ? 600 : 400};
`;

const Image = styled.Image``;
