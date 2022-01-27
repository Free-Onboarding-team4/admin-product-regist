import React from 'react';
<<<<<<< HEAD
import { SectionBlock, OptionBlock } from 'components';
=======
import { SectionBlock, OptionBlock } from 'components/Layouts';
import { Input } from 'components';
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc

const BasicInformation = () => {
  return (
    <SectionBlock title="상품 기본 정보">
      <OptionBlock name="상품명">
<<<<<<< HEAD
        <input type="text" placeholder="상품명을 입력해주세요" />
      </OptionBlock>
      <OptionBlock title="상품코드"></OptionBlock>
=======
        <Input placeholder="상품명을 입력해주세요" />
      </OptionBlock>
      <OptionBlock name="상품코드"></OptionBlock>
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
    </SectionBlock>
  );
};

export default BasicInformation;
