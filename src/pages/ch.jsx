import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import ProductExposure from 'components/Period/ProductExposure';
import ProductSale from 'components/Period/ProductSale';
import styled from 'styled-components';

const ProductPeriod = ({ name }) => {
  return (
    <SectionBlock title="노출 및 판매기간 설정">
      <OptionBlock name="상품 노출 기한">
        <ProductExposure />
      </OptionBlock>
      <OptionBlock name="상품 판매 기한">
        <ProductSale />
      </OptionBlock>
    </SectionBlock>
  );
};

export default ProductPeriod;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
