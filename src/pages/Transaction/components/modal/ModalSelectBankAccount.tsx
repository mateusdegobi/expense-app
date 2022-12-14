import React, {useMemo} from 'react';

import {Modal} from './modal.styled';
import styled from 'styled-components/native';

type Props = {
  visible: boolean;
  onRequestClose: () => void;
  setForm: React.Dispatch<React.SetStateAction<any>>;
};

export default function ModalSelectBankAccount({
  visible,
  onRequestClose,
  setForm,
}: Props) {
  const accounts = useMemo(() => {
    return [
      {
        name: 'BTG',
        type: 'Crédito',
      },
      {
        name: 'BTG',
        type: 'Débito',
      },
      {
        name: 'Banco do Brasil',
        type: 'Crédito',
      },
    ];
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}>
      <List>
        {accounts.map(account => {
          return (
            <Row
              onPress={() => {
                setForm((currentData: any) => {
                  return {
                    ...currentData,
                    account: {
                      name: account.name,
                      type: account.type
                    },
                  };
                });
                onRequestClose();
              }}>
              {/* Icon */}
              <Text key={account.name + account.type}>
                {account.name + ' - ' + account.type}
              </Text>
            </Row>
          );
        })}
      </List>
    </Modal>
  );
}

const List = styled.ScrollView`
  margin-top: 40px;
`;
const Row = styled.TouchableOpacity`
  padding: 15px 25px;
`;
const Text = styled.Text`
  font-size: 18px;
  color: #2f1155;
  font-weight: 600;
`;
