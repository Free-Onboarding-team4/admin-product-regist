import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import styled from 'styled-components';

export default function DateTimeCalender() {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalenderSection>
        <DateTimePicker
          renderInput={props => (
            <TextField {...props} placeholder="YYYY.MM.DD YY:MM" />
          )}
          label="시작 기간"
          value={startValue}
          onChange={newValue => {
            setStartValue(newValue);
          }}
        />
        <Div> ~ </Div>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          label="마감 기간"
          value={endValue}
          onChange={newValue => {
            setEndValue(newValue);
          }}
          minDate={startValue}
        />
      </CalenderSection>
    </LocalizationProvider>
  );
}

const Div = styled.div`
  margin: 0 10px;
`;

const CalenderSection = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 0 20px;
`;
