import React from 'react';
import styled from 'styled-components';
import { STYLE, COLOR } from 'constants';
import { REQ_ICON } from 'styles/required';

export const SectionBlock = ({ bg, title, children, required }) => {
  return (
    <SectionBlockContainer>
      <SectionTitle required={required}>
        <span>{title}</span>
      </SectionTitle>
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

  ${REQ_ICON}
`;

const SectionContent = styled.div`
  background: ${({ bg }) => bg && COLOR.BG};
`;
