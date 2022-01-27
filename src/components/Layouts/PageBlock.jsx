import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';

<<<<<<< HEAD
const PageBlock = ({ title, children }) => {
=======
export const PageBlock = ({ title, children }) => {
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
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

<<<<<<< HEAD
export default PageBlock;

=======
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
const PageBlockContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 40px auto;
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
