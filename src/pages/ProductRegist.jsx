import React from 'react';
import InformationFilter from './hh';
import BasicInfoSection from './jy';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';
import ProductPeriod from './ch';

const ProductRegist = () => {
  return (
    <PageBlock title="상품 등록">
      <ProductPeriod />
      <BasicInfoSection />
      <InformationFilter />
      <ProductOption />
    </PageBlock>
  );
};

export default ProductRegist;
