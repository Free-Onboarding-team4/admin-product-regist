import { COLOR } from 'constants';
import React from 'react';
import styled from 'styled-components';

export const OptionImage = () => {
  return (
    <ImageBox>
      <AddImageButton>+ 이미지 첨부</AddImageButton>
    </ImageBox>
  );
};

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  margin-bottom: 1rem;
  padding: 0.5em;
  background-color: ${COLOR.BG};
`;
const AddImageButton = styled.button`
  padding: 1em;
  width: 15rem;
  height: 4rem;
  border: 1px solid ${COLOR.MAIN};
  color: ${COLOR.MAIN};
  border-radius: 5px;
`;
