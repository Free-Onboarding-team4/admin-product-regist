import React from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

const SectionBlock = ({ title, children }) => {
  return (
    <SectionBlockContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionBlockContainer>
  );
};

export default SectionBlock;

const SectionBlockContainer = styled.section`
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

const SectionContent = styled.div``;
