import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddItem = () => {
  const [items, setItems] = useState([0]);

  const onAddDel = num => {
    let countArr = [...items];
    let counter = countArr.slice(-1)[0];
    counter += num;
    if (num > 0) {
      countArr.push(counter);
    } else {
      countArr.pop(counter);
    }
    setItems(countArr);
    console.log(items);
  };

  return (
    <div>
      {items &&
        items.map((item, i) => (
          <Item key={`item-key-${i}`}>
            <TitleInp type="text" placeholder="항목 제목 자유 입력" />
            <DescInp type="text" placeholder="내용을 입력해주세요." />
            <ItemDel type="button" onClick={e => onAddDel(-1)}>
              삭제
            </ItemDel>
          </Item>
        ))}
      <ItemAdd type="button" onClick={e => onAddDel(1)}>
        + 항목 추가
      </ItemAdd>
    </div>
  );
};

const Item = styled.div`
  margin-bottom: 20px;
`;
const TitleInp = styled.input`
  width: 32%;
  height: 40px;
  padding: 0 20px;
  border: 1px solid ${COLOR.BG};
  margin-right: 3%;
`;
const DescInp = styled.input`
  width: 40%;
  height: 40px;
  padding: 0 20px;
  border: 1px solid ${COLOR.BG};
  margin-right: 3%;
`;
const ItemDel = styled.button`
  width: 13.7%;
  height: 40px;
  padding: 0 20px;
  color: red;
  border: 1px solid ${COLOR.BG};
`;
const ItemAdd = styled.button`
  height: 40px;
  padding: 0 20px;
  color: ${COLOR.MAIN};
  font-weight: 700;
  border: 1px solid ${COLOR.BG};
`;

export default AddItem;
