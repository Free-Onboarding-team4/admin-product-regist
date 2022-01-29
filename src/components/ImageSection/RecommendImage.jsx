import { SectionBlock } from 'components/Layouts';
import React from 'react';
import { ImageUpload, UploadContainer } from '.';

export const RecommendImage = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <UploadContainer>
        <ImageUpload id="recommend-img" />
      </UploadContainer>
    </SectionBlock>
  );
};
