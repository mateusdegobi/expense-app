import React from 'react';

import * as S from '../../home.styled';

function InfoSection({value}) {
  return (
    <S.AreaInfoSection>
      <S.BoxInfoSection>
        <S.SideInfoBalance>
          <S.TitleInfoBalance>Balance</S.TitleInfoBalance>
          <S.TextValueInfoBalance>R${value}</S.TextValueInfoBalance>
        </S.SideInfoBalance>
      </S.BoxInfoSection>
    </S.AreaInfoSection>
  );
}

export default InfoSection;
