import React from 'react';
import styled from 'styled-components';
import { STYLE, COLOR } from 'constants';

export const SectionBlock = ({ bg, title, children }) => {
  return (
    <SectionBlockContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent bg={bg}>{children}</SectionContent>
    </SectionBlockContainer>
  );
};

const SectionBlockContainer = styled.section`
  position: relative;
  border: ${STYLE.BORDER};
  & + section {
    margin-top: 20px;
  }
`;

const SectionTitle = styled.h2`
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 700;
  border-bottom: ${STYLE.BORDER};
  letter-spacing: -0.5px;
`;

const SectionContent = styled.div`
  background: ${({ bg }) => bg && COLOR.BG};
`;
