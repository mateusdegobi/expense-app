import React from 'react';
import styled from 'styled-components/native';

export default function TextInput(props: any) {
  return <Input {...props} />;
}

const Input = styled.TextInput`
  background-color: #f2f2f2;
  font-size: 18px;
  color: #2f1155;
  padding: 20px 25px;
  border-radius: 10px;
  margin: 15px 0px;
`;
