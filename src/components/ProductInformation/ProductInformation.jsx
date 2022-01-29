import { SectionBlock } from 'components/Layouts';
import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { onAddDel } from 'utils/onAddDel';
import AddItem from './AddItem';
import Information from './Information';

const ProductInformation = ({ title }) => {
  const [items, setItems] = useState([0]);

  return (
    <SectionBlock title={title} bg>
      <Container>
        {items &&
          items.map((item, i) => (
            <InformationContainer key={`product-information-${i}`}>
              <Information createdNum={i} items={items} setItems={setItems} />
              <AddItem />
            </InformationContainer>
          ))}
        <Add onClick={e => onAddDel(1, items, setItems)}>+ 정보고시 추가</Add>
      </Container>
    </SectionBlock>
  );
};

const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 630px;
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
