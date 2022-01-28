import React from 'react';
import styled from 'styled-components';

export const ImageList = ({ imageList }) => {
  return (
    <ImageListBlock>
      {imageList.map((item, i) => (
        <ImageItem key={i}>{item}</ImageItem>
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
