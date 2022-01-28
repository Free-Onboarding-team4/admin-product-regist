import React from 'react';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';

export const ImageList = ({ imageList, handleRemove }) => {
  return (
    <ImageListBlock>
      {imageList.map((item, i) => (
        <ImageItem key={i}>
          {item}
          <RemoveButton onClick={handleRemove}>
            <RiCloseLine />
          </RemoveButton>
        </ImageItem>
      ))}
    </ImageListBlock>
  );
};

const ImageListBlock = styled.ul`
  margin-top: 8px;
  margin-left: 40px;
`;

const ImageItem = styled.li`
  display: flex;
  align-items: center;

  & + li {
    margin-top: 15px;
  }
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;

  svg {
    font-size: 20px;
  }
`;
