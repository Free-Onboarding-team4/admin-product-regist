import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import DateTimeCalender from '../components/Library/DateTimeCalender';
import ProductExposure from 'components/Period/ProductExposure';
import ProductSale from 'components/Period/ProductSale';
import DeliverySetting from 'components/Setting/DeliverySetting';

const ProductPeriod = ({ name }) => {
  return (
    <>
      <SectionBlock title="노출 및 판매기간 설정">
        <OptionBlock name="상품 노출 기한">
          <ProductExposure />
        </OptionBlock>
        <OptionBlock name="상품 판매 기한">
          <ProductSale />
        </OptionBlock>
      </SectionBlock>
      <SectionBlock title="상품 배송 설정">
        <OptionBlock name="사용자 배송일 출발일 지정">
          <DeliverySetting />
        </OptionBlock>
        <OptionBlock name="방문 수령">
          <DeliverySetting />
        </OptionBlock>
        <OptionBlock name="선 주문 예약 배송">
          <DeliverySetting />
          <DateTimeCalender />
        </OptionBlock>
      </SectionBlock>
    </>
  );
};

export default ProductPeriod;
