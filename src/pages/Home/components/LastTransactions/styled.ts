import styled from 'styled-components/native';

export const RowListItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 0px;
`;

export const SectionInfos = styled.View`
  flex-direction: row;
  width: 80%;
`;
export const IconArea = styled.View`
  padding: 10px;
`;
export const Icon = styled.View`
  height: 45px;
  width: 45px;
  background-color: #2f1155;
  border-radius: 16px;
`;

export const InfoArea = styled.View`
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #2f1155;
`;
export const SimpleText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #555;
`;

export const AmountArea = styled.View`
  flex-direction: row;
  width: 20%;
  justify-content: flex-end;
  align-items: center;
`;

type TextAmountProps = {
  isPositive: boolean;
};
export const TextAmount = styled.Text<TextAmountProps>`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isPositive ? 'green' : 'red')};
`;
