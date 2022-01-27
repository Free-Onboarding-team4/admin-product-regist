import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';

<<<<<<< HEAD
const OptionBlock = ({ name, children }) => {
=======
export const OptionBlock = ({ name, children }) => {
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
  return (
    <OptionBlockContainer>
      <OptionName>{name}</OptionName>
      <OptionContent>{children}</OptionContent>
    </OptionBlockContainer>
  );
};

export default OptionBlock;

const OptionBlockContainer = styled.div`
  display: flex;
  /* border: ${STYLE.BORDER}; */

  & + div {
    border-top: ${STYLE.BORDER};
  }
`;

const OptionName = styled.div`
  padding: 20px 10px;
  flex-basis: 20%;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.5px;
  background: ${COLOR.BG_LIGHT};
`;

const OptionContent = styled.div`
  flex: 1;
<<<<<<< HEAD
  padding: 20px 7px;
=======
  padding: 20px;
  padding-left: 8px;
>>>>>>> ee4c3f1be68975d2326e6b749d135837f28086bc
`;
