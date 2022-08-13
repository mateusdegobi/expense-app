import React, {useCallback} from 'react';
import {
  CircleIconDismiss,
  DismissIcon,
  Icon,
  KeyboardContainer,
  KeyButton,
  KeyButtonText,
} from './styled';

enum KeyType {
  Digit = 'Digit',
  Backspace = 'Backspace',
  Empty = 'Empty',
  Dismiss = 'Dismiss',
}

type Key = {
  key: string;
  type: KeyType;
  render: (onPress?: any) => JSX.Element;
  value?: any;
};

const makeDigit = (digit: number): Key => ({
  key: String(digit),
  type: KeyType.Digit,
  value: digit,
  render: ({onPress}) => (
    <KeyButton onPress={onPress}>
      <KeyButtonText>{digit}</KeyButtonText>
    </KeyButton>
  ),
});
const EmptyKey: Key = {
  key: KeyType.Empty,
  type: KeyType.Empty,
  render: () => (
    <KeyButton>
      <KeyButtonText> </KeyButtonText>
    </KeyButton>
  ),
};
const BackspaceKey: Key = {
  key: KeyType.Backspace,
  type: KeyType.Backspace,
  render: ({onPress}) => (
    <KeyButton onPress={onPress}>
      <Icon
        resizeMode="contain"
        source={require('../../../../assets/icons/customkeyboard/close-circle.png')}
      />
    </KeyButton>
  ),
};
const DismissKey: Key = {
  key: KeyType.Dismiss,
  type: KeyType.Dismiss,
  render: ({onPress}) => (
    <KeyButton onPress={onPress}>
      <CircleIconDismiss>
        <DismissIcon
          resizeMode="contain"
          source={require('../../../../assets/icons/customkeyboard/down-arrow.png')}
        />
      </CircleIconDismiss>
    </KeyButton>
  ),
};

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .map(makeDigit)
  .concat([EmptyKey, makeDigit(0), BackspaceKey, DismissKey]);

type KeyboardProps = {
  onDelete: () => void;
  onInsert: (value: number) => void;
  onDismiss: () => void;
};
const CustomKeyboard = ({onDelete, onInsert, onDismiss}: KeyboardProps) => {
  const renderKey = useCallback((keyObj: Key) => {
    const KeyComponent = keyObj.render;

    const onKeyPress = () => {
      if (keyObj.type === KeyType.Backspace) {
        return onDelete();
      }
      if (keyObj.type === KeyType.Digit) {
        return onInsert(keyObj.value);
      }
      if (keyObj.type === KeyType.Dismiss) {
        return onDismiss();
      }
    };

    return <KeyComponent key={keyObj.key} onPress={onKeyPress} />;
  }, [onDelete, onInsert, onDismiss]);

  return <KeyboardContainer>{keys.map(renderKey)}</KeyboardContainer>;
};

export default CustomKeyboard;
