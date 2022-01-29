import React, { useState } from 'react';
import category from 'data/category';
import { COLOR } from 'constants';
import { Cross } from '@styled-icons/entypo/Cross';
import styled from 'styled-components';

const ProductCategory = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [showList, setShowList] = useState([]);

  const checkedCategory = id => {
    if (checkedList.indexOf(id) < 0) {
      setCheckedList(checkedList => [...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter(checkedList => checkedList !== id));
    }
  };

  const showLists = id => {
    if (showList.indexOf(id) === checkedList.indexOf(id)) {
      category.map(item => (
        <SelectBox key={item.id} value={item.id}>
          {item.name} <CrossIcon onClick={() => deleteList(item.id)} />
        </SelectBox>
      ));
    } else {
      <ShowCategory>카테고리를 지정해 주세요</ShowCategory>;
    }
  };

  const deleteList = id => {
    setShowList(showList.filter(showList => showList !== id));
  };

  const ChoiceCategory = category.map(item => (
    <Check key={item.id}>
      <Input
        type="checkbox"
        value={item.id}
        onClick={() => checkedCategory(item.id)}
        onChange={() => showLists(item.id)}
      />
      <Label>{item.name}</Label>
    </Check>
  ));

  // const upRoadCategory =

  // <ShowCategory>카테고리를 지정해 주세요</ShowCategory>;

  return (
    <CategorySection>
      {/* {checkedList}
      {showList} */}
      <CategoryList>{ChoiceCategory}</CategoryList>
      <SelectCategory></SelectCategory>
    </CategorySection>
  );
};

export default ProductCategory;

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

const CrossIcon = styled(Cross)`
  width: 20px;
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
