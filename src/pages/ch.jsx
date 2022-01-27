import React from 'react';
import { SectionBlock, OptionBlock } from 'components';
import styled from 'styled-components';

const ProductPeriod = () => {
  return (
    <SectionBlock title="노출 및 판매기간 설정">
      <OptionBlock name="상품 노출 기한">
        {/* <div>
          <input type="radio" name="chk_info" value="제한없음"></input>
          <input type="radio" name="chk_info" value="미노출"></input>
          <input type="radio" name="chk_info" value="노출 기간 설정"></input>
        </div> */}
      </OptionBlock>
      <OptionBlock name="상품 판매 기한">
        {/* <input type="radio" name="chk_info" value="제한없음" />
        <input type="radio" name="chk_info" value="미노출" />
        <input type="radio" name="chk_info" value="노출 기간 설정" /> */}
      </OptionBlock>
    </SectionBlock>
  );
};

export default ProductPeriod;

const Input = styled.div``;
