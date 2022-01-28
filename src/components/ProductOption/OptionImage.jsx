import { STYLE } from 'constants';
import { COLOR } from 'constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCancelPresentation } from 'react-icons/md';
export const OptionImage = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [isEnterd, setIsEntered] = useState(false);
  const getImageUrl = e => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    setImgUrl(url);
  };
  const handleEnter = () => {
    setIsEntered(el => !el);
  };
  const handleLeave = () => {
    setIsEntered(false);
  };
  console.log(imgUrl);
  return (
    <ImageBox>
      {imgUrl ? (
        <>
          <img
            src={imgUrl}
            alt="optionImage"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            isEnterd={isEnterd}
          />
          <MdCancelPresentation
            style={{
              position: 'absolute',
              color: COLOR.RED,
              fontSize: '30px',
              top: `1%`,
              right: '1%',
              cursor: 'pointer',
            }}
            onClick={() => setImgUrl('')}
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
