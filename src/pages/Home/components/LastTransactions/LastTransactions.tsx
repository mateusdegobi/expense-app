import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';

import TitleTopic from '../../../../components/TitleTopic/TitleTopic';
import isNumPositive from '../../../../helpers/isNumPositive';

import {fullList} from '../../../../mock/transaction';

import * as GC from '../../home.styled';
import * as S from './styled';

function LastTransactions() {
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    (async () => {
      const infoList = fullList.indexList;
      const list = fullList.transactions;

      setTransactions(list[0].list);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const infoList = fullList.indexList;
      const list = fullList.transactions;

      setTransactions(list[0].list);
    })();
  }, []);

  const RenderItemList = ({item}) => {
    return (
      <S.RowListItem>
        <S.SectionInfos>
          <S.IconArea>
            <S.Icon />
          </S.IconArea>
          <S.InfoArea>
            <S.Title>{item.title}</S.Title>
            <S.SimpleText>{item.date}</S.SimpleText>
          </S.InfoArea>
        </S.SectionInfos>
        <S.AmountArea>
          <S.TextAmount isPositive={isNumPositive(item.amount)}>
            R${item.amount}
          </S.TextAmount>
        </S.AmountArea>
      </S.RowListItem>
    );
  };

  return (
    <GC.AreaLastTransactions>
      <GC.HeaderListTransactions>
        <TitleTopic>Últimas transações</TitleTopic>
        <TouchableOpacity onPress={() => false}>
          <GC.TextSeeAll>Ver tudo</GC.TextSeeAll>
        </TouchableOpacity>
      </GC.HeaderListTransactions>

      <FlatList data={transactions} renderItem={RenderItemList} />
    </GC.AreaLastTransactions>
  );
}
export default LastTransactions;
