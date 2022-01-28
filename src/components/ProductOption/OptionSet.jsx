import React from 'react';
import styled from 'styled-components';
import { InnerOption } from './InnerOption';
import { OptionImage } from './OptionImage';
import { DeleteButton } from './DeleteButton';

export const OptionSet = ({ setOptionSetCount }) => {
  const handleDelete = () => {
    setOptionSetCount(count => count - 1);
    console.log('clicked!');
  };
  return (
    <>
      <SetContainer>
        <OptionImage />
        <InnerOption />
        <DeleteButton onClick={handleDelete} />
      </SetContainer>
    </>
  );
};

const SetContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 50rem;
  padding: 1em;
  background-color: #fff;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.75);
  &:not(:last-child) {
    margin-bottom: 7rem;
  }
  & > button {
    position: absolute;
    top: -5%;
    right: 0;
  }
`;
