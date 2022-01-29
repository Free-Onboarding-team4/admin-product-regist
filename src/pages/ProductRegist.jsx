import React from 'react';
import { PageBlock, SectionBlock } from 'components/Layouts';
import ProductPeriod from '../components/Period/ProductPeriod';
import ProductSetting from 'components/Setting/ProductSetting';
import { SideNav } from 'components/Layouts/SideNav';
import { BasicInformation } from 'components/BasicInformation';
import { IntroductionImage, RecommendImage } from 'components/ImageSection';
import { OptionMain } from 'components/ProductOption';
import ProductInformation from 'components/ProductInformation/ProductInformation';

const ProductRegist = () => {
  return (
    <>
      <SideNav />
      <PageBlock title="상품 등록">
        <ProductPeriod />

        <SectionBlock title="상품 기본 정보">
          <BasicInformation />
        </SectionBlock>

        <SectionBlock title="상품 옵션" bg>
          <OptionMain />
        </SectionBlock>

        <SectionBlock title="상품 소개 이미지">
          <IntroductionImage />
        </SectionBlock>
        <SectionBlock title="구매자 추천 이미지">
          <RecommendImage />
        </SectionBlock>

        <SectionBlock title="상품 정보 고시" bg>
          <ProductInformation />
        </SectionBlock>

        <ProductSetting />
      </PageBlock>
    </>
  );
};

export default ProductRegist;
