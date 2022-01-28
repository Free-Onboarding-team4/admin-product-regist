import { Input } from './Input';
import React from 'react';
import styled from 'styled-components';
import { DeleteButton } from './DeleteButton';
import { InputNumber } from './InputNumber';
export const AdditionalOption = ({ additionCount, setAdditionCount }) => {
  return (
    <AddOptBox>
      <li>
        <Input placeholder={'추가 옵션명 (필수)'} fontS />
      </li>
      <li>
        <InputNumber placeholder={'추가 옵션 정상가 (필수)'} fontS />
        <span>원</span>
      </li>
      <DeleteButton items={additionCount} setItems={setAdditionCount} />
    </AddOptBox>
  );
};

const AddOptBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  li {
    display: flex;
    align-items: center;
  }
  li:first-child {
    width: 35%;
    margin-right: 1rem;
  }
  li:nth-child(2) {
    width: 35%;
  }
  span {
    margin-left: 0.5rem;
  }
`;
