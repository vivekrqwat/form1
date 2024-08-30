"use client";
import React from 'react'
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimeField, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
const Date:React.FC =()=> {

    return (
      <div>
       
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker','TimePicker']}>
        <DatePicker label="enter date"  />
        <TimePicker label="time"></TimePicker>
        </DemoContainer>
                <DemoItem label="Date Time">
          <DateTimeField defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>

        </LocalizationProvider>
      </div>
    )
}

export default Date
