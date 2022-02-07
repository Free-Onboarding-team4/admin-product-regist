import React from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';

export const TextInput = ({ placeholder, handleChange, name }) => {
  return (
    <InputBlock name={name} placeholder={placeholder} onChange={handleChange} />
  );
};

export const SearchInput = ({
  placeholder,
  handleSearch,
  handleChange,
  value,
  name,
}) => {
  return (
    <InputBlock
      name={name}
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
