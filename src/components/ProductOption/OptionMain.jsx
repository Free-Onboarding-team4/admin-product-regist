import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { OptionSet } from './OptionSet';

const OptionMain = () => {
  const [optionSetCount, setOptionSetCount] = useState(0);
  const handleClick = () => {
    setOptionSetCount(count => count + 1);
  };
  return (
    <>
      <MainContainer>
        {optionSetCount === 0 ? (
          <NoOptionText>옵션세트를 추가하여 옵션을 구성해 주세요.</NoOptionText>
        ) : (
          Array(optionSetCount)
            .fill(1)
            .map(i => (
              <OptionSet key={i} setOptionSetCount={setOptionSetCount} />
            ))
        )}
      </MainContainer>
      <AddOptionSetBtn onClick={handleClick}>+ 옵션 세트 추가</AddOptionSetBtn>
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