import React from 'react';
import Switch from '@mui/material/Switch';
import { SectionBlock, OptionBlock } from 'components/Layouts';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ProductAgree = ({ title }) => {
  return (
    <SectionBlock title={title}>
      <OptionBlock name="마일리지 적립">
        <Switch {...label} readOnly color="secondary" defaultChecked />
      </OptionBlock>
    </SectionBlock>
  );
};
