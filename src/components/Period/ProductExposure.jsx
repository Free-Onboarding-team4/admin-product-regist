import React from 'react';
import { DateTimeCalender } from '../Library';
import { COLOR } from 'constants';
import styled from 'styled-components';

export const ProductExposure = () => {
  return (
    <InputSection>
      <InputBox>
        <Input type="radio" name="exposure" value="0" defaultChecked />
        <Label>제한없음</Label>
      </InputBox>
      <br />
      <InputBox>
        <Input type="radio" name="exposure" value="1" />
        <Label>미노출</Label>
      </InputBox>
      <br />
      <InputBox>
        <Input type="radio" name="exposure" value="2" />
        <Label>노출 기간 설정</Label>
      </InputBox>
      <DateTimeCalender />
    </InputSection>
  );
};

const InputBox = styled.div`
  display: inline;
`;

const Label = styled.label`
  vertical-align: super;
  padding-left: 10px;
`;

const Input = styled.input.attrs({ type: 'radio' })`
  -moz-appearance: none;
  margin-left: 16px;
  border: 1px solid ${COLOR.BG};
  width: 25px;
  height: 25px;
  :checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin-left: 16px;
    width: 25px;
    height: 25px;
    border: 3px solid ${COLOR.BG};
    border-radius: 100%;
    background-color: ${COLOR.MAIN};
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;
