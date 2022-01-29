import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { STYLE } from 'constants';
import { onAddDel } from 'utils/onAddDel';
import { Input, InputNumber, AdditionalOption, DeleteButton } from './';

export const InnerOption = ({
  innerCount,
  setInnerCount,
  optionSetCount,
  setOptionSetCount,
}) => {
  const [additionCount, setAdditionCount] = useState([]);
  const [ogPrice, setOgPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  useEffect(() => {
    const calcDCRate = () => {
      let dcPrice = ogPrice - price;
      if (dcPrice === 0 || price === 0) {
        setDiscountRate(0);
        return;
      }
      setDiscountRate(((dcPrice / ogPrice) * 100).toFixed(0));
    };
    calcDCRate();
  }, [ogPrice, price]);

  return (
    <InnerOptionBox>
      <DeleteButton
        items={innerCount.length === 1 ? optionSetCount : innerCount}
        setItems={innerCount.length === 1 ? setOptionSetCount : setInnerCount}
      />
      <Input placeholder={'옵션명을 입력해 주세요'} fontS />
      <SecondLineOption>
        <li>
          <InputNumber
            placeholder={'상품 정상가 (필수)'}
            fontS
            setPrice={setOgPrice}
          />
          <span>원</span>
        </li>
        <li>{discountRate === 0 ? '할인율 없음' : `${discountRate}%`}</li>
        <li>
          <InputNumber
            placeholder={'상품 판매가 (필수)'}
            fontS
            setPrice={setPrice}
          />
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
  transition: all 0.5s ease-out;
  & > button {
    margin-left: auto;
  }
  & > * {
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
  border: ${STYLE.BORDER};
  border-radius: 5px;
  padding-left: 0.5em;
`;
