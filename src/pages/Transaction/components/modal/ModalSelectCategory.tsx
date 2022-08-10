import React, {useMemo} from 'react';

import {Modal} from './modal.styled';
import styled from 'styled-components/native';

type Props = {
  visible: boolean;
  onRequestClose: () => void;
  setForm: React.Dispatch<React.SetStateAction<any>>;
};

export default function ModalSelectCategory({
  visible,
  onRequestClose,
  setForm,
}: Props) {
  const categorys = useMemo(() => {
    return [
      {
        name: 'Lazer',
        color: 'yellow',
      },
      {
        name: 'Contas',
        color: 'brown',
      },
      {
        name: 'Casa',
        color: 'red',
      },
    ];
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}>
      <List>
        {categorys.map(category => {
          return (
            <Row
              onPress={() => {
                setForm((currentData: any) => {
                  return {
                    ...currentData,
                    category,
                  };
                });
                onRequestClose();
              }}>
              {/* Icon */}
              <Text key={category.name}>{category.name}</Text>
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
