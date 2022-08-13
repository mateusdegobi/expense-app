import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useState} from 'react';
import MainButton from '../../components/buttons/MainButton/MainButton';
import SelectWithModal from '../../components/form/SelectWithModal/SelectWithModal';
import TextInput from '../../components/form/TextInput/TextInput';
import CustomKeyboard from './components/CustomKeyboard/CustomKeyboard';
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

  const handleAddInputValue = useCallback(
    (value: string | number) => {
      setValue(currentValue => currentValue + String(value));
    },
    [value],
  );
  const handleEraseInputValue = useCallback(() => {
    if (value !== currencyPolo) {
      setValue(currentValue => currentValue.slice(0, -1));
    }
  }, [value]);

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
        <S.AreaDisplayInput onPress={() => setIsViewNumpad(true)}>
          <S.DisplayInput
            value={value}
            onChangeText={handleAddInputValue}
            keyboardType="number-pad"
            type={type}
            onFocus={() => setIsViewNumpad(true)}
            onBlur={() => setIsViewNumpad(false)}
            onEndEditing={() => setIsViewNumpad(false)}
            showSoftInputOnFocus={false}
            disable
            selectTextOnFocus={false}
            editable={false}
            contextMenuHidden={true}
          />
        </S.AreaDisplayInput>

        {isViewNumpad ? (
          <S.ViewKeyboard>
            <CustomKeyboard
              onDelete={handleEraseInputValue}
              onInsert={handleAddInputValue}
              onDismiss={() => setIsViewNumpad(false)}
            />
          </S.ViewKeyboard>
        ) : (
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

            <SelectWithModal
              placeholder="Quando ocorreu?"
              onPress={() => false}>
              Hoje
            </SelectWithModal>
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
