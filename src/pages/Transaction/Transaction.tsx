import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from 'react';
import * as S from './transaction.styled';

export default function Transaction({navigation, route}) {
  const {type} = route?.params;
  const currencyPolo = type === 'entrada' ? 'R$' : 'R$-';

  const [value, setValue] = useState(currencyPolo);

  const handleInputValue = useCallback(
    (txt: string) => {
      if (txt.includes(currencyPolo)) {
        setValue(txt);
      }
    },
    [value],
  );

  return (
    <S.View>
      <StatusBar translucent={false} />
      <S.Header>
        <S.ViewBackIcon onPress={() => navigation.goBack()}>
          <S.BackIcon
            source={require('../../assets/icons/default/back-icon.png')}
            resizeMode="contain"
          />
        </S.ViewBackIcon>
      </S.Header>
      <S.AreaDisplayInput>
        <S.DisplayInput
          value={value}
          onChangeText={handleInputValue}
          keyboardType="number-pad"
          type={type}
        />
      </S.AreaDisplayInput>
    </S.View>
  );
}
