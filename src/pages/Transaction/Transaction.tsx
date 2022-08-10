import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from 'react';
import MainButton from '../../components/buttons/MainButton/MainButton';
import SelectWithModal from '../../components/form/SelectWithModal/SelectWithModal';
import TextInput from '../../components/form/TextInput/TextInput';
import ModalSelectBankAccount from './components/modal/ModalSelectBankAccount';
import ModalSelectCategory from './components/modal/ModalSelectCategory';
import * as S from './transaction.styled';

export default function Transaction({navigation, route}) {
  const [isModalAccountBank, setIsModalAccountBank] = useState(false);
  const [isModalCategory, setIsModalCategory] = useState(false);

  const [isViewNumpad, setIsViewNumpad] = useState(false);

  const {type} = route?.params;
  const currencyPolo = type === 'entrada' ? 'R$' : 'R$-';

  const [value, setValue] = useState(currencyPolo);

  const [form, setForm] = useState({
    title: '',
    value: 0,
    category: {name: '', color: ''},
    date: 0,
    account: {name: '', type: ''},
  });

  const handleInputValue = useCallback(
    (txt: string) => {
      if (txt.includes(currencyPolo)) {
        setValue(txt);
      }
    },
    [value],
  );

  const handleSubmit = useCallback(() => {
    console.log(form);
  }, []);

  return (
    <>
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
            onFocus={() => setIsViewNumpad(true)}
            onBlur={() => setIsViewNumpad(false)}
            onEndEditing={() => setIsViewNumpad(false)}
            showSoftInputOnFocus={false}
          />
        </S.AreaDisplayInput>

        {isViewNumpad ? null : (
          <S.Form>
            <TextInput placeholderColor="#828282" placeholder="O que seria?" />

            <SelectWithModal
              onPress={() => setIsModalAccountBank(true)}
              placeholder="Qual tipo de conta?">
              {form.account.name
                ? `${form.account.name} - ${form.account.type}`
                : ''}
            </SelectWithModal>

            <SelectWithModal
              onPress={() => setIsModalCategory(true)}
              placeholder="Qual a categoria?">
              {form.category.name}
            </SelectWithModal>

            <SelectWithModal onPress={() => false}>Hoje</SelectWithModal>
          </S.Form>
        )}
        <MainButton onPress={handleSubmit}>Confirmar</MainButton>
      </S.View>
      <ModalSelectBankAccount
        visible={isModalAccountBank}
        onRequestClose={() => {
          setIsModalAccountBank(false);
        }}
        setForm={setForm}
      />
      <ModalSelectCategory
        visible={isModalCategory}
        onRequestClose={() => {
          setIsModalCategory(false);
        }}
        setForm={setForm}
      />
    </>
  );
}
