"use client";
import React from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
const Date:React.FC =()=> {

    return (
      <div>
       
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker','TimePicker']}>
        <DatePicker label="enter date"  />
        <TimePicker label="time"></TimePicker>
        </DemoContainer>

        </LocalizationProvider>
      </div>
    )
}

export default Date
