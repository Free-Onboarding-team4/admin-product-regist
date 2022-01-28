import React from 'react';
import BasicInformation from './jy';
import { PageBlock } from 'components';
import ProductPeriod from './ch';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <ProductPeriod />
      <BasicInformation />
    </PageBlock>
  );
};

export default ProductRegist;
