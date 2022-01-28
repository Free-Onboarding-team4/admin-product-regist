import React from 'react';
import { BasicInformation } from 'components/BasicInformation';
import { SectionBlock } from 'components/Layouts';

const BasicInfoSection = () => {
  return (
    <SectionBlock title="상품 기본 정보">
      <BasicInformation />
    </SectionBlock>
  );
};

export default BasicInfoSection;
