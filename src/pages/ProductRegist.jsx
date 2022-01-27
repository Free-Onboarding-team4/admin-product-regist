import React from 'react';
import ProductPeriod from './ch';
import BasicInformation from './jy';
import { PageBlock } from 'components';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <ProductPeriod />
      <BasicInformation />
    </PageBlock>
  );
};

export default ProductRegist;
