import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';

const AddItem = () => {
  return (
    <div>
      <TitleInp type="text" placeholder="항목 제목 자유 입력" />
      <DescInp type="text" placeholder="내용을 입력해주세요." />
      <ItemDel type="button">삭제</ItemDel>
      <ItemAdd type="button">+ 항목 추가</ItemAdd>
    </div>
  );
};

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
  margin-top: 20px;
  height: 40px;
  padding: 0 20px;
  color: ${COLOR.MAIN};
  font-weight: 700;
  border: 1px solid ${COLOR.BG};
`;

export default AddItem;
