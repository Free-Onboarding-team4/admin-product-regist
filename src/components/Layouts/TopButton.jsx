import React from 'react';
import styled from 'styled-components';
import { STYLE, COLOR } from 'constants';

export const TopButton = ({ name, handleClick }) => {
  return (
    <SaveButton type="submit" onClick={handleClick}>
      {name}
    </SaveButton>
  );
};

const SaveButton = styled.button`
  position: fixed;
  top: 5px;
  right: ${STYLE.PADDING};
  width: 90px;
  height: 30px;
  font-size: 14px;
  color: #eee;
  border-radius: 4px;
  background-color: ${COLOR.MAIN};
  z-index: 100;
`;
