import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { OptionBlock, SectionBlock } from 'components/Layouts';
import { ImageUpload } from 'components/ImageSection';
import { SearchInput, TextInput, ProductCategory, AutoComplete } from '.';
import { STYLE } from 'constants';
import inventory from 'data/inventory.json';

export const BasicInformation = ({ title, addRequired }) => {
  const [code, setCode] = useState('');
  const [value, setValue] = useState({
    productName: '',
    description: '',
    stock: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      for (let item of inventory) {
        if (value['productName'] === item.name) {
          setCode(item.id.slice(0, 11));
          setValue(prev => ({
            ...prev,
            stock: item.stock,
          }));
          break;
        } else {
          setCode(uuidv4().slice(0, 11));
          setValue(prev => ({
            ...prev,
            stock: 10,
          }));
        }
      }
    }
  };

  useEffect(() => {
    const names = Object.keys(value);
    names.forEach(name => addRequired(name, value[name]));
  }, [value, addRequired]);

  return (
    <SectionBlock title={title}>
      <OptionContainer>
        <OptionBlock name="카테고리" required>
          <ProductCategory addRequired={addRequired} />
        </OptionBlock>

        <OptionBlock name="필터 태그">
          <AutoComplete />
        </OptionBlock>

        <OptionRow>
          <OptionBlock name="상품명" required>
            <SearchInput
              name="productName"
              placeholder="상품명 입력 후 Enter키를 누르세요"
              handleSearch={handleSearch}
              handleChange={handleChange}
            />
          </OptionBlock>
          <OptionBlock name="상품코드">{code}</OptionBlock>
        </OptionRow>

        <OptionBlock name="상품 구성 소개 정보" required>
          <TextInput
            name="description"
            placeholder="상품 구성 소개 정보를 입력해 주세요."
            handleChange={handleChange}
          />
        </OptionBlock>

        <OptionBlock name="상품 썸네일">
          <ImageUpload id="thumbnail" />
        </OptionBlock>

        <OptionBlock name="상품 대표 이미지">
          <ImageUpload id="main-img" />
        </OptionBlock>

        <OptionBlock name="상품 총 재고" required>
          {value.stock}개
        </OptionBlock>
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
