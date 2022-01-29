import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProductCategory from 'components/Category/ProductCategory';
import { OptionBlock, SectionBlock } from 'components/Layouts';
import { ImageUpload } from 'components/ImageSection';
import { SearchInput, TextInput } from '.';
import { STYLE } from 'constants';
import inventory from 'data/inventory.json';
import { AutoComplete } from 'components/AutoComplete';

export const BasicInformation = ({ title }) => {
  const [value, setValue] = useState('');
  const [code, setCode] = useState('');
  const [stock, setStock] = useState(0);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSearch = e => {
    if (e.keyCode === 13) {
      inventory.forEach(item => {
        if (value === item.name) {
          setCode(item.id.slice(0, 13));
          setStock(item.stock);
        } else {
          setCode(uuidv4().slice(0, 13));
        }
      });
    }
  };

  return (
    <SectionBlock title={title}>
      <OptionContainer>
        <ProductCategory />

        <OptionBlock name="필터 태그">
          <AutoComplete />
        </OptionBlock>

        <OptionRow>
          <OptionBlock name="상품명">
            <SearchInput
              placeholder="상품명을 입력해주세요"
              handleSearch={handleSearch}
              handleChange={handleChange}
            />
          </OptionBlock>
          <OptionBlock name="상품코드">{code}</OptionBlock>
        </OptionRow>
        <OptionBlock name="상품 구성 소개 정보">
          <TextInput placeholder="상품 구성 소개 정보를 입력해 주세요." />
        </OptionBlock>
        <OptionBlock name="상품 썸네일">
          <ImageUpload id="thumbnail" />
        </OptionBlock>
        <OptionBlock name="상품 대표 이미지">
          <ImageUpload id="main-img" />
        </OptionBlock>
        <OptionBlock name="상품 총 재고">{stock}개</OptionBlock>
      </OptionContainer>
    </SectionBlock>
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
