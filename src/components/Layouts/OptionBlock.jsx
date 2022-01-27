import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';

const OptionBlock = ({ name, children }) => {
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
  padding: 20px 7px;
`;
