import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import ProductExposure from 'components/Period/ProductExposure';
import ProductSale from 'components/Period/ProductSale';
import ProductCategory from 'components/Category/ProductCategory';

const ProductPeriod = ({ name }) => {
  return (
    <>
      <SectionBlock title="노출 및 판매기간 설정">
        <OptionBlock name="상품 노출 기한">
          <ProductExposure />
        </OptionBlock>
        <OptionBlock name="상품 판매 기한">
          <ProductSale />
        </OptionBlock>
        <OptionBlock name="카테고리*">
          <ProductCategory />
        </OptionBlock>
      </SectionBlock>
    </>
  );
};

export default ProductPeriod;
