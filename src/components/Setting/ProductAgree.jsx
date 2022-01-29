import React from 'react';
import { BasicSwitches } from 'components/Library';
import { SectionBlock, OptionBlock } from 'components/Layouts';

export const ProductAgree = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="마일리지 적립">
        <BasicSwitches />
      </OptionBlock>
    </SectionBlock>
  );
};
