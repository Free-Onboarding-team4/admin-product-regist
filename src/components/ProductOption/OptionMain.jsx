import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { onAddDel } from 'utils/onAddDel';
import { OptionSet } from './OptionSet';

const OptionMain = () => {
  const [optionSetCount, setOptionSetCount] = useState([]);
  return (
    <>
      <MainContainer>
        {optionSetCount.length === 0 ? (
          <NoOptionText>옵션세트를 추가하여 옵션을 구성해 주세요.</NoOptionText>
        ) : (
          optionSetCount.map(el => (
            <OptionSet
              key={el}
              optionSetCount={optionSetCount}
              setOptionSetCount={setOptionSetCount}
            />
          ))
        )}
      </MainContainer>
      <AddOptionSetBtn
        onClick={() => onAddDel(1, optionSetCount, setOptionSetCount)}
      >
        + 옵션 세트 추가
      </AddOptionSetBtn>
    </>
  );
};

export default OptionMain;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6em 0;
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
`;
const NoOptionText = styled.span`
  position: absolute;
  top: 40%;
  font-size: 1.3rem;
`;
const AddOptionSetBtn = styled.button`
  position: absolute;
  border: 1px solid ${COLOR.MAIN};
  color: ${COLOR.MAIN};
  padding: 13.5px 0.5em;
  top: 0;
  right: 0;
`;
