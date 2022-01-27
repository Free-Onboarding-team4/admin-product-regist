import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';
import AddItem from './AddItem';

const ProductInformation = () => {
  return (
    <Container>
      <InformationContainer>
        <Title>정보고시 생성 순서</Title>
        <form>
          <ul>
            <ListItem>
              <InputTitle>제품명 / 중량</InputTitle>
              <Input type="text" placeholder="제품명 / 중량을 입력해 주세요." />
            </ListItem>
            <ListItem>
              <InputTitle>원산지 / 원재료 함량</InputTitle>
              <Input
                type="text"
                placeholder="원산지 / 원재 함량을 입력해 주세요."
              />
            </ListItem>
            <ListItem>
              <InputTitle>등급</InputTitle>
              <Input
                type="text"
                placeholder="등급 (근내지방도 수치)를 입력해 주세요."
              />
            </ListItem>
            <ListItem>
              <InputTitle>보관</InputTitle>
              <Input type="text" placeholder="보관 방식을 입력해 주세요." />
            </ListItem>
            <ListItem>
              <InputTitle>식품 유형</InputTitle>
              <Input
                type="text"
                placeholder="식품 유형을 입력해 주세요. (ex) 포장육"
              />
            </ListItem>
          </ul>
          <InfoDelBtn type="button">삭제</InfoDelBtn>
        </form>
        <AddItem />
      </InformationContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;
const InformationContainer = styled.div`
  position: relative;
  margin: 20px;
  padding: 40px;
  background-color: #fff;
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 40px;
`;
const ListItem = styled.li`
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputTitle = styled.p`
  width: 40%;
`;
const Input = styled.input`
  width: 60%;
  height: 40px;
  padding: 0 20px;
  border: 1px solid ${COLOR.BG};
  margin-bottom: 10px;
`;
const InfoDelBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  border: 1px solid ${COLOR.MAIN};
  padding: 5px 7px;
`;

export default ProductInformation;
