import React from 'react';

import * as S from '../../home.styled';

import TitlePurple from '../../../../components/TitlePurple/TitlePurple';

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

export default Header;
