import React, { useState } from 'react';
import styled from 'styled-components';
import { STYLE } from 'constants';
import { RiAddLine } from 'react-icons/ri';
import { ImageList } from './';

export const ImageUpload = ({ id }) => {
  const [imageList, setImageList] = useState([]);

  const handleUpload = e => {
    const uploadedImage = Array.from(e.target.files).map(file => file.name);
    if (id === 'thumbnail') {
      setImageList(uploadedImage);
    } else {
      setImageList([...imageList, ...uploadedImage].reverse());
    }
  };

  const handleRemove = e => {
    const removeImage = e.target.parentElement.parentElement.innerText;
    setImageList(imageList.filter(img => img !== removeImage));
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
          multiple={!(id === 'thumbnail')}
        />
        <AddButton htmlFor={id}>
          <RiAddLine />
          이미지 첨부
        </AddButton>
      </ButtonWrapper>
      <ImageList imageList={imageList} handleRemove={handleRemove} />
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
