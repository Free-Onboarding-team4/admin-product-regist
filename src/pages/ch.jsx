import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import DateTimeCalender from '../components/Library/DateTimeCalender';
import DeliverySetting from 'components/Setting/DeliverySetting';

const Ch = () => {
  return (
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
  );
};

export default Ch;
