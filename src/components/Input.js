import React from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

export const Input = ({ placeholder, fontS }) => {
  return <InputBlock placeholder={placeholder} fontS={fontS} />;
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
