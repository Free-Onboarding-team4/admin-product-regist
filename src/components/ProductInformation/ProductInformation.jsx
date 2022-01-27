import React from 'react';
import styled from 'styled-components';
import AddItem from './AddItem';
import Information from './Information';

const ProductInformation = () => {
  return (
    <Container>
      <InformationContainer>
        <Information />
        <AddItem />
      </InformationContainer>
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

export default ProductInformation;
