import React from 'react';
import styled from 'styled-components';

import { STYLE } from 'constants';
import { PageBlock, SideNav } from 'components/Layouts';
import { ProductDelivery, ProductAgree, EctSetting } from 'components/Setting';
import { BasicInformation } from 'components/BasicInformation';
import { IntroductionImage, RecommendImage } from 'components/ImageSection';
import { OptionMain } from 'components/ProductOption';
import { ProductPeriod } from '../components/Period';
import { ProductInformation } from 'components/ProductInformation';

const ProductRegist = () => {
  return (
    <>
      <SideNav />
      <Container>
        <PageBlock title="상품 등록">
          <ProductPeriod title="노출 및 판매기간 설정" />
          <BasicInformation title="상품 기본 정보" />
          <OptionMain title="상품 옵션" />
          <IntroductionImage title="상품 소개 이미지" />
          <RecommendImage title="구매자 추천 이미지" />
          <ProductInformation title="상품 정보 고시" />
          <ProductDelivery title="상품 배송 설정" />
          <ProductAgree title="상품 혜택 허용 설정" />
          <EctSetting title="기타 설정" />
        </PageBlock>
      </Container>
    </>
  );
};

const Container = styled.main`
  margin-left: ${STYLE.NAV_WIDTH};
`;

export default ProductRegist;
