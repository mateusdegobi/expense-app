import React from 'react';
import {StatusBar} from 'expo-status-bar';

import ActionButtons from './components/ActionButtons/ActionButtons';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import LastTransactions from './components/LastTransactions/LastTransactions';

import * as S from './home.styled';

function Home({navigation}) {
  return (
    <S.Container>
      <StatusBar backgroundColor='#2f1155' style='light' />
      <Header />
      <InfoSection />
      <ActionButtons navigation={navigation} />
      <LastTransactions />
    </S.Container>
  );
}

export default Home;
