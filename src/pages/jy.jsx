import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import { Input } from 'components';

const BasicInformation = () => {
  return (
    <SectionBlock title="상품 기본 정보">
      <OptionBlock name="상품명">
        <Input placeholder="상품명을 입력해주세요" />
      </OptionBlock>
      <OptionBlock name="상품코드"></OptionBlock>
    </SectionBlock>
  );
};

export default BasicInformation;
