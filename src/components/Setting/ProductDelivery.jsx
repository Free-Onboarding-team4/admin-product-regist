import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import { DateTimeCalender, DatePickerBox } from 'components/Library';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ProductDelivery = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="사용자 배송일 출발일 지정">
        <Switch {...label} color="secondary" />
      </OptionBlock>
      <OptionBlock name="방문 수령">
        <Switch {...label} color="secondary" />
      </OptionBlock>
      <OptionBlock name="선 주문 예약 배송">
        <SettingBox>
          <Switch {...label} color="secondary" />
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
  );
};

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
