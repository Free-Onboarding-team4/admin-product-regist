import React from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

export const TextInput = ({ placeholder }) => {
  return <InputBlock placeholder={placeholder} />;
};

export const SearchInput = ({
  placeholder,
  handleSearch,
  handleChange,
  value,
}) => {
  return (
    <InputBlock
      value={value}
      placeholder={placeholder}
      onKeyDown={handleSearch}
      onChange={handleChange}
    />
  );
};

const InputBlock = styled.input`
  width: 100%;
  border: ${STYLE.BORDER};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
`;
