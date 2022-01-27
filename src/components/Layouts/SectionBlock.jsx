import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { STYLE } from 'constants';

const SectionBlock = ({ title, children }) => {
  return (
    <SectionBlockContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
=======
import { STYLE, COLOR } from 'constants';

export const SectionBlock = ({ title, children, bg }) => {
  return (
    <SectionBlockContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent bg={bg}>{children}</SectionContent>
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
    </SectionBlockContainer>
  );
};

<<<<<<< HEAD
export default SectionBlock;

=======
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
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

<<<<<<< HEAD
const SectionContent = styled.div``;
=======
const SectionContent = styled.div`
  background: ${({ bg }) => bg && COLOR.BG};
`;
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
