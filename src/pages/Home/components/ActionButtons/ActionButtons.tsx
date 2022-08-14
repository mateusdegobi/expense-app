import React from "react";

import * as S from "../../home.styled";

const buttons = ['Entrada', 'Saída', 'Transf.'];

function ActionButtons({navigation}) {
  return (
    <S.AreaActionButtons>
      <S.BoxButton
        onPress={() =>
          navigation.navigate('Transaction', {
            type: 'entrada',
          })
        }>
        <S.IconButton
          source={require('../../../../assets/icons/home/entrada.png')}
        />
        <S.TextButton>Entrada</S.TextButton>
      </S.BoxButton>
      <S.BoxButton
        onPress={() =>
          navigation.navigate('Transaction', {
            type: 'saída',
          })
        }>
        <S.IconButton source={require('../../../../assets/icons/home/saida.png')} />
        <S.TextButton>Saída</S.TextButton>
      </S.BoxButton>
      <S.BoxButton>
        <S.IconButton
          source={require('../../../../assets/icons/home/transferencia.png')}
        />
        <S.TextButton>Transf.</S.TextButton>
      </S.BoxButton>
    </S.AreaActionButtons>
  );
}

export default ActionButtons;
