import React from 'react';
import { BasicInformation } from 'components/BasicInformation';
import { SectionBlock } from 'components/Layouts';
import { IntroductionImage, RecommendImage } from 'components/ImageSection';

const BasicInfoSection = () => {
  return (
    <>
      <SectionBlock title="상품 기본 정보">
        <BasicInformation />
      </SectionBlock>
      <SectionBlock title="상품 소개 이미지">
        <IntroductionImage />
      </SectionBlock>
      <SectionBlock title="구매자 추천 이미지">
        <RecommendImage />
      </SectionBlock>
    </>
  );
};

export default BasicInfoSection;
