import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const PADDING_ROOT = 20;
const WIDTH_SCREEN = Dimensions.get('screen').width - PADDING_ROOT * 2;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
  padding: ${PADDING_ROOT}px;
`;

export const Content = styled.View`
  margin-top: 50px;
`;
export const InfoArea = styled.View``;
export const UserArea = styled.View``;
export const UserPhoto = styled.Image``;

export const AreaInfoSection = styled.View`
  margin-top: 40px;
`;
export const BoxInfoSection = styled.View`
  background-color: #2f1155;
  height: 160px;
  width: ${WIDTH_SCREEN}px;
  padding: 25px;
  border-radius: 50px;
  justify-content: center;
`;
export const SideInfoBalance = styled.View``;
export const TitleInfoBalance = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 22px;
`;
export const TextValueInfoBalance = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 26px;
`;

export const AreaActionButtons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100px;
  width: ${WIDTH_SCREEN}px;
`;

export const BoxButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
`;
export const IconButton = styled.Image`
  height: 35px;
  width: 35px;
`;
export const TextButton = styled.Text`
  font-weight: 400;
  color: #4f4f4f;
`;

export const AreaLastTransactions = styled.View`
  margin-top: 20px;
  width: ${WIDTH_SCREEN}px;
`;
export const HeaderListTransactions = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextSeeAll = styled.Text`
  color: #6e34b8;
`;
