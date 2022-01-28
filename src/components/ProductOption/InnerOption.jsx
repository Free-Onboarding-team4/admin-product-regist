import { Input } from './Input';
import { InputNumber } from './InputNumber';
import { STYLE } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AdditionalOption } from './AdditionalOption';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { DeleteButton } from './DeleteButton';
import { onAddDel } from 'utils/onAddDel';

export const InnerOption = ({
  innerCount,
  setInnerCount,
  optionSetCount,
  setOptionSetCount,
}) => {
  const [additionCount, setAdditionCount] = useState([]);
  return (
    <InnerOptionBox>
      <DeleteButton
        items={innerCount.length === 1 ? optionSetCount : innerCount}
        setItems={innerCount.length === 1 ? setOptionSetCount : setInnerCount}
      />
      <Input placeholder={'옵션명을 입력해 주세요'} fontS />
      <SecondLineOption>
        <li>
          <InputNumber placeholder={'상품 정상가 (필수)'} fontS />
          <span>원</span>
        </li>
        <li>할인율%</li>
        <li>
          <InputNumber placeholder={'상품 판매가 (필수)'} fontS />
          <span>원</span>
        </li>
        <li>
          <InputNumber placeholder={'재고 (필수)'} fontS />
          <span>개</span>
        </li>
        <SelectBox name="tax">
          <option value="taxFree">비과세</option>
          <option value="tax">과세</option>
        </SelectBox>
      </SecondLineOption>
      <AddSemiOption>
        <AiOutlinePlusSquare
          onClick={() => onAddDel(1, additionCount, setAdditionCount)}
        />
        <span>추가 옵션 상품 추가</span>
      </AddSemiOption>
      {additionCount.map(el => (
        <AdditionalOption
          key={el}
          additionCount={additionCount}
          setAdditionCount={setAdditionCount}
        />
      ))}
    </InnerOptionBox>
  );
};

const InnerOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  border: ${STYLE.BORDER};
  border-radius: 5px;
  & > button {
    margin-left: auto;
  }
  & > *:not(:first-child) {
    margin-bottom: 1rem;
  }
  & + div {
    margin-top: 1rem;
  }
`;
const SecondLineOption = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 0.5rem;
  }
`;
const AddSemiOption = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.3rem;
    width: 2rem;
    cursor: pointer;
  }
  span {
    transform: translateY(1px);
  }
`;
const SelectBox = styled.select`
  display: flex;
  width: 6rem;
  height: 3rem;
`;
