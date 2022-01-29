import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import { BasicSwitches } from 'components/Library';

export const EctSetting = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="감사카드 제공">
        <BasicSwitches />
      </OptionBlock>
    </SectionBlock>
  );
};
