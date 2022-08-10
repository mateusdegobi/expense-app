import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  padding: 10px 25px;
  background-color: #fff;
`;
export const Header = styled.View`
  margin-top: 30px;
`;
export const ViewBackIcon = styled.TouchableOpacity`
  background: #f2f2f2;
  height: 45px;
  width: 45px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const BackIcon = styled.Image`
  height: 20px;
`;
export const AreaDisplayInput = styled.View`
  margin-top: 20px;
`;
type DisplayInputProps = {
  type: 'entrada' | 'saída';
};
export const DisplayInput = styled.TextInput<DisplayInputProps>`
  width: 50%;
  margin-left: 25%;
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  color: ${props => (props.type === 'entrada' ? '#397E55' : '#7E395A')};
`;

export const Form = styled.View`
  margin-top: 50px;
`;
