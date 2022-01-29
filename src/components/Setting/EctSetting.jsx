import React from 'react';
import { SectionBlock, OptionBlock } from 'components/Layouts';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const EctSetting = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="감사카드 제공">
        <Switch {...label} color="secondary" />
      </OptionBlock>
    </SectionBlock>
  );
};
