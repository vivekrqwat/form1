"use client";
import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
const Drop:React.FC =()=> {
    const names=['sagar','vivek',"sam"]


    const[name,setname]=React.useState<string[]>([]);
    const hchange=(event: SelectChangeEvent<typeof name>)=>{
      // console.log({name})
     const value=event.target.value
  
      setname( typeof value === 'string' ? value.split(',') : value,)
  
    }
    return (
      <div>
        <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
           multiple
          value={name}
          onChange={hchange}
          >
  
            {
              names.map((i)=>{
                return <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
                
              })
            }
           
          </Select>
        
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label={new Date().toDateString()}></DatePicker>
        </DemoContainer>

        </LocalizationProvider>
      </div>
    )
}

export default Drop
