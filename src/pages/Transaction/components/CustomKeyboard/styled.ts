import styled from 'styled-components/native';

export const KeyboardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const numOfColums = 3;

export const KeyButton = styled.TouchableOpacity`
  width: ${100 / numOfColums}%;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
`;
export const KeyButtonText = styled.Text`
  font-size: 25px;
  color: #2f1155;
  font-weight: 600;
`;
export const Icon = styled.Image`
  height: 25px;
  width: 25px;
`;

export const DismissIcon = styled.Image`
  height: 15px;
  width: 15px;
`;
export const CircleIconDismiss = styled.View`
  background: #efefef;
  padding: 15px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
