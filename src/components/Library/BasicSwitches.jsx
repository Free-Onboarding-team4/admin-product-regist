import * as React from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const BasicSwitches = () => {
  return (
    <Container>
      <Switch {...label} color="secondary" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
