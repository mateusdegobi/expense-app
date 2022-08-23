import React, {createContext, useContext, useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';

import ActionButtons from './components/ActionButtons/ActionButtons';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import LastTransactions from './components/LastTransactions/LastTransactions';

import {fullList} from '../../mock/transaction';

import * as S from './home.styled';
import {TransationContext} from '../Transaction/Transaction';

function Home({navigation}) {
  const transactioncontext = useContext(TransationContext);
  const [transactions, setTransactions] = useState(transactioncontext.amount);
  const [amount, setAmount] = useState(0);

  const [add, setAdd] = useState({});

  useEffect(() => {
    setTransactions(fullList.transactions);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setAmount(transactioncontext.amount);
    });

  }, [transactioncontext.amount]);

  return (
    <S.Container>
      <StatusBar backgroundColor="#2f1155" style="light" />
      <Header />
      <InfoSection value={amount} />
      <ActionButtons navigation={navigation} />
      <LastTransactions transactions={transactions} />
    </S.Container>
  );
}

export default Home;
