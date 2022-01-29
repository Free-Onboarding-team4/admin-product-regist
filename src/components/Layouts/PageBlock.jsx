import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';

export const PageBlock = ({ title, children }) => {
  return (
    <PageBlockContainer>
      <PageTitleRow>
        <PageTitle>{title}</PageTitle>
        <SaveButton>저장하기</SaveButton>
      </PageTitleRow>
      <PageContent>{children}</PageContent>
    </PageBlockContainer>
  );
};

const PageBlockContainer = styled.div`
  height: 100%;
  padding: 40px 9vw;
`;

const PageTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border: ${STYLE.BORDER};
`;

const PageTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const PageContent = styled.div`
  padding: 20px;
  border: ${STYLE.BORDER};
  border-top: none;
`;

const SaveButton = styled.button`
  width: 90px;
  height: 30px;
  font-size: 14px;
  color: #eee;
  border-radius: 4px;
  background-color: ${COLOR.MAIN};
`;
