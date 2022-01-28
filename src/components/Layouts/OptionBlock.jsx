import React from 'react';
import styled from 'styled-components';
import { COLOR, STYLE } from 'constants';

export const OptionBlock = ({ name, children }) => {
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
<<<<<<< HEAD

=======
>>>>>>> b6e84f62557b3d06abd79c22dc4245b0f97204cf
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
`;

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 12px 20px 12px 8px;
`;
