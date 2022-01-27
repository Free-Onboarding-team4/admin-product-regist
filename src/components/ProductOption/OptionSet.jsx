import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';
import { InnerOption } from './InnerOption';
import { OptionImage } from './OptionImage';

export const OptionSet = ({ setOptionSetCount }) => {
  const handleDelete = () => {
    setOptionSetCount(count => count - 1);
  };
  return (
    <>
      <SetContainer>
        <OptionImage />
        <InnerOption />
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
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
  height: 40rem;
  padding: 1em;
  background-color: #fff;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.75);
  &:not(:last-child) {
    margin-bottom: 7rem;
  }
`;
const DeleteButton = styled.button`
  position: absolute;
  height: 2rem;
  width: 4rem;
  top: -10%;
  right: 0;
  padding: 0.5em;
  border-radius: 5px;
  color: ${COLOR.RED};
  border: 1px solid ${COLOR.RED};
`;
