import { SectionBlock } from 'components/Layouts';
import React from 'react';
import { ImageUpload, UploadContainer } from '.';

export const IntroductionImage = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <UploadContainer>
        <ImageUpload id="intro-img" />
      </UploadContainer>
    </SectionBlock>
  );
};
