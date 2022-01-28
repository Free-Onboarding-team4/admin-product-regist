import { SectionBlock } from 'components/Layouts';
import { ProductInformation } from 'components/ProductInformation';
import React from 'react';

const InformationFilter = () => {
  return (
    <SectionBlock title="상품 정보 고시" bg>
      <ProductInformation />
    </SectionBlock>
  );
};

export default InformationFilter;
