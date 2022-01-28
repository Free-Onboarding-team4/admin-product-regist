import React from 'react';
import styled from 'styled-components';

export const UploadContainer = ({ children }) => {
  return <ImageUploadContainer>{children}</ImageUploadContainer>;
};

const ImageUploadContainer = styled.div`
  padding: 20px;
`;
