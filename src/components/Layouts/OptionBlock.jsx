import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';
import { REQ_ICON } from 'styles/required';

export const OptionBlock = ({ name, children, required }) => {
  return (
    <OptionBlockContainer>
      <OptionName required={required}>
        <span>{name}</span>
      </OptionName>
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
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 200px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.5px;
  background: ${COLOR.BG_LIGHT};

  ${REQ_ICON}
`;

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 12px 20px 12px 8px;
`;
