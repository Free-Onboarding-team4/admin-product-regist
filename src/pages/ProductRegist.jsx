import React from 'react';
import BasicInformation from 'pages/jy';
import InformationFilter from './hh';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <BasicInfoSection />
      <InformationFilter />
      <ProductOption />
    </PageBlock>
  );
};

export default ProductRegist;
