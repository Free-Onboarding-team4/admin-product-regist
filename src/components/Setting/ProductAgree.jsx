import React from 'react';
import DeliverySetting from './DeliverySetting';
import { SectionBlock, OptionBlock } from 'components/Layouts';

const ProductAgree = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="마일리지 적립">
        <DeliverySetting />
      </OptionBlock>
    </SectionBlock>
  );
};

export default ProductAgree;
