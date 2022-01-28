import React from 'react';
import styled from 'styled-components';
import { OptionBlock } from 'components/Layouts';
import { STYLE } from 'constants';
import { Input } from 'components';

export const BasicInformation = () => {
  return (
    <OptionContainer>
      <OptionRow>
        <OptionBlock name="상품명">
          <Input placeholder="상품명을 입력해주세요" />
        </OptionBlock>
        <OptionBlock name="상품코드">상품코드</OptionBlock>
      </OptionRow>
      <OptionBlock name="상품 구성 소개 정보">
        <Input placeholder="상품 구성 소개 정보를 입력해 주세요." />
      </OptionBlock>
      <OptionBlock name="상품 썸네일"></OptionBlock>
      <OptionBlock name="상품 대표 이미지"></OptionBlock>
      <OptionBlock name="상품 총 재고">NN개</OptionBlock>
    </OptionContainer>
  );
};

const OptionContainer = styled.div``;

const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${STYLE.BORDER};

  & > div:first-child {
    flex-basis: 60%;
    div {
      flex-basis: 200px;
    }
  }

  & > div:last-child {
    flex: 1;
    border-top: none;
  }
`;
