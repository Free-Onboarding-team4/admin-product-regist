import React, { useState } from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';
import { RiAddLine } from 'react-icons/ri';
import { ImageList } from './';

export const ImageUpload = ({ id }) => {
  const [imageList, setImageList] = useState([]);

  const handleUpload = e => {
    const uploadedImage = e.target.files[0].name;
    if (id === 'thumbnail') {
      setImageList([uploadedImage]);
    } else {
      setImageList([...imageList, uploadedImage].reverse());
    }
  };

  return (
    <ImageUploadContainer>
      <ButtonWrapper>
        <input
          id={id}
          type="file"
          onChange={handleUpload}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <AddButton htmlFor={id}>
          <RiAddLine />
          이미지 첨부
        </AddButton>
      </ButtonWrapper>
      <ImageList imageList={imageList} />
    </ImageUploadContainer>
  );
};

const ImageUploadContainer = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div``;

const AddButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  padding: 12px 0;
  text-align: center;
  border: ${STYLE.BORDER_BTN};
  border-radius: 3px;
  letter-spacing: -0.5px;
  cursor: pointer;
`;
