import React from 'react';
import { Modal } from './modal.styled';

type Props = {
  visible: boolean;
  onRequestClose: () => void;
  data: {
    bank: string;
    
  }[];
};

export default function ModalSelectBankAccount({visible, onRequestClose, data}: Props) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
    >

    </Modal>
  );
}
