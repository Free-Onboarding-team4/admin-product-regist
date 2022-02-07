import React, { useState, useEffect } from 'react';
import category from 'data/category';
import { COLOR } from 'constants';
import { RiCloseLine } from 'react-icons/ri';
import styled from 'styled-components';

export const ProductCategory = ({ addRequired }) => {
  const [checkedList, setCheckedList] = useState([]);

  const checkedCategory = id => {
    if (checkedList.indexOf(id) < 0) {
      setCheckedList(checkedList => [...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter(checkedList => checkedList !== id));
    }
  };

  useEffect(() => {
    addRequired('category', checkedList);
  }, [checkedList, addRequired]);

  const ChoiceCategory = category.map(item => (
    <Check key={item.id}>
      <Input
        type="checkbox"
        defaultChecked={checkedList.indexOf(item.id) < 0 ? false : true}
        onClick={() => checkedCategory(item.id)}
        readOnly
      />
      <Label>{item.name}</Label>
    </Check>
  ));

  const upLoadCategory =
    checkedList.length === 0 ? (
      <ShowCategory>카테고리를 지정해 주세요</ShowCategory>
    ) : (
      category.map(
        item =>
          checkedList.indexOf(item.id) >= 0 && (
            <SelectBox key={item.id} value={item.id}>
              {item.name} <CrossIcon onClick={() => checkedCategory(item.id)} />
            </SelectBox>
          )
      )
    );

  return (
    <CategorySection>
      <CategoryList>{ChoiceCategory}</CategoryList>
      <SelectCategory>{upLoadCategory}</SelectCategory>
    </CategorySection>
  );
};

const Input = styled.input.attrs({ type: 'checkBox' })`
  -moz-appearance: none;
  margin-left: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  :checked {
    -webkit-appearance: none;
    margin-left: 16px;
    width: 20px;
    height: 20px;
    background: ${COLOR.MAIN};
    border: 1px solid ${COLOR.BG};
    border-radius: 5px;
  }
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-left: 15px;
  font-size: 20px;
`;

const ShowCategory = styled.div`
  color: gray;
`;

const CrossIcon = styled(RiCloseLine)`
  width: 20px;
  cursor: pointer;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 150px;
  height: 40px;
  border: 1px solid ${COLOR.MAIN};
  border-radius: 3px;
  background-color: ${COLOR.BG_LIGHT};
`;

const CategorySection = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px 10px 5px;
  margin-right: 20px;
  width: 400px;
  height: 400px;
  border: 1px solid ${COLOR.BG_LIGHT};
  border-radius: 5px;
`;

const SelectCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 400px;
  border: 1px solid ${COLOR.BG_LIGHT};
  border-radius: 5px;
`;
