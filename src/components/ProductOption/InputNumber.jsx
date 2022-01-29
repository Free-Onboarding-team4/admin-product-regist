import React, { useState } from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

export const InputNumber = ({ placeholder, fontS, setPrice }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = e => {
    let cleanString = e.target.value.split(',').join('');
    if (isNaN(Number(cleanString))) {
      return;
    }
    if (Number(cleanString) >= 1000) {
      let commaNumber = Number(cleanString).toLocaleString('en', {
        maximumFractionDigits: 3,
      });
      setInputValue(commaNumber);
      setPrice && setPrice(Number(cleanString));
      return;
    }
    setInputValue(cleanString);
    setPrice && setPrice(Number(cleanString));
  };

  return (
    <InputBlock
      placeholder={placeholder}
      fontS={fontS}
      value={inputValue}
      onChange={e => handleInput(e)}
      onKeyUp={e => handleInput(e)}
    />
  );
};

const InputBlock = styled.input`
  width: 100%;
  border: ${STYLE.BORDER};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;

  &::placeholder {
    font-size: ${({ fontS }) => (fontS ? 13 : 15)}px;
  }
`;
