import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';
import { onAddDel } from 'utils/onAddDel';

export const DeleteButton = ({ items, setItems }) => {
  return <DelBtn onClick={() => onAddDel(-1, items, setItems)}>삭제</DelBtn>;
};
const DelBtn = styled.button`
  display: block;
  height: 2rem;
  width: 4rem;
  border-radius: 5px;
  line-height: 2rem;
  color: ${COLOR.RED};
  border: 1px solid ${COLOR.RED};
`;
