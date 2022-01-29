import React from 'react';
import InformationFilter from './hh';
import { PageBlock } from 'components/Layouts';
import ProductOption from 'pages/hj';
import ProductPeriod from '../components/Period/ProductPeriod';
import BasicInfoSection from './jy';
import Ch from './ch';
import { SideNav } from 'components/Layouts/SideNav';

const ProductRegist = () => {
  return (
    <>
      {/* <SideNav /> */}
      <PageBlock title="상품 등록">
        <ProductPeriod />
        <BasicInfoSection />
        <InformationFilter />
        <ProductOption />
        <Ch />
      </PageBlock>
    </>
  );
};

export default ProductRegist;
