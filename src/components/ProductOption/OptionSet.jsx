import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerOption } from './InnerOption';
import { OptionImage } from './OptionImage';
import { DeleteButton } from './DeleteButton';
import { COLOR } from 'constants';

export const OptionSet = ({ setOptionSetCount }) => {
  const [innerCount, setInnerCount] = useState([0]);
  const handleDelete = () => {
    setOptionSetCount(count => count - 1);
    console.log('clicked!');
  };
  const addInnerOption = () => {
    let countArr = [...innerCount];
    countArr.push(Math.random());
    setInnerCount(countArr);
    return;
  };
  return (
    <>
      <SetContainer>
        <OptionImage />
        {innerCount.map(el => (
          <InnerOption
            key={el}
            innerCount={innerCount}
            setInnerCount={setInnerCount}
          />
        ))}
        <DeleteButton onClick={handleDelete} />
        <AddButton onClick={addInnerOption}>+ 옵션 추가</AddButton>
      </SetContainer>
    </>
  );
};

const SetContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 40rem;
  padding: 1em 1em 4em 1em;
  background-color: #fff;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.75);
  &:not(:last-child) {
    margin-bottom: 7rem;
  }
  & > button:not(:last-child) {
    position: absolute;
    top: -7%;
    right: 0;
  }
`;
const AddButton = styled.button`
  position: absolute;
  bottom: 1%;
  width: 98.5%;
  height: 3rem;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid ${COLOR.MAIN};
  color: ${COLOR.MAIN};
`;
