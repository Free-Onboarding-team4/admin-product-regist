import { AutoComplete } from 'components/AutoComplete';
import { SectionBlock } from 'components/Layouts';
import { ProductInformation } from 'components/ProductInformation';
import React from 'react';
import styled from 'styled-components';

const InformationFilter = () => {
  return (
    <div>
      <SectionBlock title="상품 정보 고시" bg>
        <ProductInformation />
      </SectionBlock>
      <FilterContainer>
        <AutoComplete />
      </FilterContainer>
    </div>
  );
};

const FilterContainer = styled.div`
  display: flex;
`;

export default InformationFilter;
