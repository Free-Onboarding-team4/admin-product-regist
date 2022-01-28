import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';

export const DeleteButton = () => {
  return <DelBtn>삭제</DelBtn>;
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
