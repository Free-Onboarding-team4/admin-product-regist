import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import DeliverySetting from 'components/Setting/DeliverySetting';

const ProductSetting = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="감사카드 제공">
        <DeliverySetting />
      </OptionBlock>
    </SectionBlock>
  );
};

export default ProductSetting;
