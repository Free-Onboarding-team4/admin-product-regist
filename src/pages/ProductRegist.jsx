import React from 'react';
import BasicInformation from 'pages/jy';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <BasicInformation />
      <ProductOption />
    </PageBlock>
  );
};

export default ProductRegist;
