import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import DateTimeCalender from 'components/Library/DateTimeCalender';
import DeliverySetting from 'components/Setting/DeliverySetting';
import DatePickerBox from 'components/Library/DatePickerBox';
import styled from 'styled-components';

const ProductSetting = () => {
  return (
    <>
      <SectionBlock title="상품 배송 설정">
        <OptionBlock name="사용자 배송일 출발일 지정">
          <DeliverySetting />
        </OptionBlock>
        <OptionBlock name="방문 수령">
          <DeliverySetting />
        </OptionBlock>
        <OptionBlock name="선 주문 예약 배송">
          <SettingBox>
            <DeliverySetting />
            <DateSection>
              <OrderTime>주문 시간</OrderTime>
              <DateTimeCalender />
            </DateSection>
            <DeliveryBox>
              <DawnDelivery>새벽 배송</DawnDelivery>
              <DateDivBox>
                <DatePickerBox />
              </DateDivBox>
              <GeneralDelivery>일반 배송</GeneralDelivery>
              <DateDivBox>
                <DatePickerBox />
              </DateDivBox>
            </DeliveryBox>
          </SettingBox>
        </OptionBlock>
      </SectionBlock>
      <SectionBlock title="상품 혜택 허용 설정">
        <OptionBlock name="마일리지 적립">
          <DeliverySetting />
        </OptionBlock>
      </SectionBlock>
      <SectionBlock title="기타 설정">
        <OptionBlock name="감사카드 제공">
          <DeliverySetting />
        </OptionBlock>
      </SectionBlock>
    </>
  );
};

export default ProductSetting;

const DateDivBox = styled.div`
  width: 140px;
`;

const DeliveryBox = styled.div`
  display: flex;
  align-items: center;
`;

const GeneralDelivery = styled.div`
  margin-left: 40px;
  margin-right: 20px;
`;

const DawnDelivery = styled.div`
  margin-left: 10px;
  margin-right: 20px;
`;

const OrderTime = styled.div`
  margin-left: 10px;
`;

const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
`;
