import React from 'react';
import InformationFilter from './hh';
import BasicInformation from './jy';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <BasicInformation />
      <InformationFilter />
      <ProductOption />
    </PageBlock>
  );
};

export default ProductRegist;
