import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';
import { onAddDel } from 'utils/onAddDel';
import { InnerOption, OptionImage, DeleteButton } from './';

export const OptionSet = ({ optionSetCount, setOptionSetCount }) => {
  const [innerCount, setInnerCount] = useState([0]);

  return (
    <>
      <SetContainer>
        <OptionImage />
        {innerCount.map(el => (
          <InnerOption
            key={el}
            innerCount={innerCount}
            setInnerCount={setInnerCount}
            optionSetCount={optionSetCount}
            setOptionSetCount={setOptionSetCount}
          />
        ))}
        <DeleteButton items={optionSetCount} setItems={setOptionSetCount} />
        <AddButton onClick={() => onAddDel(1, innerCount, setInnerCount)}>
          + 옵션 추가
        </AddButton>
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
  border: ${STYLE.BORDER_BTN};
  color: ${COLOR.MAIN};
`;
