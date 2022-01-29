import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCancelPresentation } from 'react-icons/md';
import { STYLE, COLOR } from 'constants';

export const OptionImage = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [isEntered, setIsEntered] = useState(false);
  const getImageUrl = e => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    setImgUrl(url);
  };
  const handleEnter = () => {
    if (!imgUrl) {
      return;
    }
    setIsEntered(el => !el);
  };
  const handleLeave = () => {
    if (!imgUrl) {
      return;
    }
    setIsEntered(false);
  };
  return (
    <ImageBox onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {imgUrl ? (
        <>
          <img src={imgUrl} alt="optionImage" />
          <MdCancelPresentation
            onClick={() => setImgUrl('')}
            className={isEntered ? 'active' : ''}
          />
        </>
      ) : (
        <>
          <AddImageButton htmlFor="optionImage">+ 이미지 첨부</AddImageButton>
          <input
            type="file"
            id="optionImage"
            name="optionImage"
            accept="image/*"
            onChange={e => getImageUrl(e)}
          />
        </>
      )}
    </ImageBox>
  );
};

const ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20rem;
  height: 100%;
  margin-bottom: 1rem;
  padding: 0.5em;
  background-color: ${COLOR.BG};
  input {
    display: none;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  & > svg {
    position: absolute;
    color: ${COLOR.RED};
    font-size: 30px;
    top: 1%;
    right: 1%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
  & > svg.active {
    opacity: 1;
  }
`;
const AddImageButton = styled.label`
  padding: 1em;
  width: 15rem;
  height: 4rem;
  border: ${STYLE.BORDER_BTN};
  color: ${COLOR.MAIN};
  border-radius: 5px;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
`;
