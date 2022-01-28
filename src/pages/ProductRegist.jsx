import React from 'react';
import InformationFilter from './hh';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';
import BasicInfoSection from './jy';

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
