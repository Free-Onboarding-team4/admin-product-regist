import React from 'react';
import { SectionBlock, OptionBlock } from 'components';

const BasicInformation = () => {
  return (
    <SectionBlock title="상품 기본 정보">
      <OptionBlock name="상품명">
        <input type="text" placeholder="상품명을 입력해주세요" />
      </OptionBlock>
      <OptionBlock title="상품코드"></OptionBlock>
    </SectionBlock>
  );
};

export default BasicInformation;
