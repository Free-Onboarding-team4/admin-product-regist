import React from 'react';
import Switch from '../Library/Switch';
import styled from 'styled-components';

const DeliverySetting = () => {
  return (
    <Div>
      <Switch />
    </Div>
  );
};

export default DeliverySetting;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
