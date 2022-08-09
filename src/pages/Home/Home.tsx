import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import TitlePurple from '../../components/TitlePurple/TitlePurple';
import TitleTopic from '../../components/TitleTopic/TitleTopic';

import * as S from './home.styled';

function Home({navigation}) {
  function Header() {
    return (
      <S.Content>
        <S.InfoArea>
          <TitlePurple>Carteira</TitlePurple>
        </S.InfoArea>
        <S.UserArea>
          <S.UserPhoto />
        </S.UserArea>
      </S.Content>
    );
  }
  function InfoSection() {
    return (
      <S.AreaInfoSection>
        <S.BoxInfoSection>
          <S.SideInfoBalance>
            <S.TitleInfoBalance>Balance</S.TitleInfoBalance>
            <S.TextValueInfoBalance>R$1.234</S.TextValueInfoBalance>
          </S.SideInfoBalance>
        </S.BoxInfoSection>
      </S.AreaInfoSection>
    );
  }
  function ActionButtons() {
    const buttons = ['Entrada', 'Saída', 'Transf.'];
    return (
      <S.AreaActionButtons>
        <S.BoxButton
          onPress={() =>
            navigation.navigate('Transaction', {
              type: 'entrada',
            })
          }>
          <S.IconButton
            source={require('../../assets/icons/home/entrada.png')}
          />
          <S.TextButton>Entrada</S.TextButton>
        </S.BoxButton>
        <S.BoxButton
          onPress={() =>
            navigation.navigate('Transaction', {
              type: 'saída',
            })
          }>
          <S.IconButton source={require('../../assets/icons/home/saida.png')} />
          <S.TextButton>Saída</S.TextButton>
        </S.BoxButton>
        <S.BoxButton>
          <S.IconButton
            source={require('../../assets/icons/home/transferencia.png')}
          />
          <S.TextButton>Transf.</S.TextButton>
        </S.BoxButton>
      </S.AreaActionButtons>
    );
  }
  function LastTransactions() {
    return (
      <S.AreaLastTransactions>
        <S.HeaderListTransactions>
          <TitleTopic>Últimas transações</TitleTopic>
          <TouchableOpacity onPress={() => false}>
            <S.TextSeeAll>Ver tudo</S.TextSeeAll>
          </TouchableOpacity>
        </S.HeaderListTransactions>
      </S.AreaLastTransactions>
    );
  }

  return (
    <S.Container>
      <Header />
      <InfoSection />
      <ActionButtons />
      <LastTransactions />
    </S.Container>
  );
}

export default Home;
