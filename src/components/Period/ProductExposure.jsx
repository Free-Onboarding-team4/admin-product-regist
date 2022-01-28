import React from 'react';
import DateTimeCalender from '../Library/DateTimeCalender';
import { COLOR } from 'constants';
import styled from 'styled-components';

const ProductExposure = () => {
  return (
    <>
      <Input type="radio" name="exposure" value="0" defaultChecked />
      <Label>제한없음</Label>
      <br />
      <Input type="radio" name="exposure" value="1" />
      <Label>미노출</Label>
      <br />
      <Input type="radio" name="exposure" value="2" />
      <Label>노출 기간 설정</Label>
      <DateTimeCalender />
    </>
  );
};

export default ProductExposure;

const Label = styled.label`
  vertical-align: super;
  padding-left: 15px;
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
`;
