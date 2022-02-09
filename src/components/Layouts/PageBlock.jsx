import React from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

export const PageBlock = ({ title, children }) => {
  return (
    <PageBlockContainer>
      <PageTitleRow>
        <PageTitle>{title}</PageTitle>
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
  position: fixed;
  margin-left: 14vw;
  width: calc(100% - 14vw);
  height: 42px;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px ${STYLE.PADDING};
  border: ${STYLE.BORDER};
`;

const PageTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const PageContent = styled.div`
  padding: ${STYLE.PADDING};
  border: ${STYLE.BORDER};
  border-top: none;
`;
