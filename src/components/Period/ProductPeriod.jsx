import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import { ProductExposure, ProductSale } from './';

export const ProductPeriod = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="상품 노출 기한">
        <ProductExposure />
      </OptionBlock>
      <OptionBlock name="상품 판매 기한">
        <ProductSale />
      </OptionBlock>
    </SectionBlock>
  );
};
