import React from 'react';
import styled from 'styled-components';
import { Input, DeleteButton, InputNumber } from './';

export const AdditionalOption = ({ additionCount, setAdditionCount }) => {
  return (
    <AddOptBox>
      <OptionName>
        <Input placeholder={'추가 옵션명 (필수)'} fontS />
      </OptionName>
      <OptionOGPrice>
        <InputNumber placeholder={'추가 옵션 정상가 (필수)'} fontS />
        <span>원</span>
      </OptionOGPrice>
      <DeleteButton items={additionCount} setItems={setAdditionCount} />
      <GreyLinker></GreyLinker>
    </AddOptBox>
  );
};

const AddOptBox = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5.5%;
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
  button {
    /* margin-left: auto; */
  }
`;
const GreyLinker = styled.div`
  position: absolute;
  border-left: 2px solid #a1a1a1;
  border-bottom: 2px solid #a1a1a1;
  border-radius: 0 0 0 5px;
  width: 1.5rem;
  height: 1.5rem;
  left: 2.5%;
  top: 5%;
`;
const OptionName = styled.li`
  margin-right: 5rem;
  flex: 1;
`;
const OptionOGPrice = styled.li`
  margin-right: 2rem;
  flex: 1;
`;
