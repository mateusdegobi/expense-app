import React from 'react';

import * as S from '../../home.styled';

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

export default InfoSection;
