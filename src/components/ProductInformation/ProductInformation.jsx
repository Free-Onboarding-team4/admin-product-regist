import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddItem from './AddItem';
import Information from './Information';

const ProductInformation = () => {
  const [createdNum, setCreatedNum] = useState(0);

  const onClickAdd = () => {
    setCreatedNum(createdNum + 1);
  };

  return (
    <Container>
      <InformationContainer>
        <Information createdNum={createdNum} />
        <AddItem />
      </InformationContainer>
      <Add onClick={onClickAdd}>+ 정보고시 추가</Add>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;
const InformationContainer = styled.div`
  position: relative;
  margin: 20px;
  padding: 40px;
  background-color: #fff;
`;
const Add = styled.div`
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  color: ${COLOR.MAIN};
  font-size: 18px;
  font-weight: 700;
`;

export default ProductInformation;
