'use client';
import { Calendar,DateObject  } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import React, { useState } from "react";



const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {
  
  
  
  const inService:any = [];
  disabledDates.forEach((dateRange:any) => {
    let startDate = new DateObject(dateRange[0]).convert(persian, persian_fa).format();
    let endDate = new DateObject(dateRange[dateRange.length - 1]).convert(persian, persian_fa).format();
    inService.push([startDate, endDate]);
});

  const reserved = [
    []
  ];
  const initialValue = [...reserved, ...inService];
  const [values, setValues] = useState(initialValue);

function isInService(strDate:any) {
  return inService.some(([start, end]) => strDate >= start && strDate <= end);
}
  console.log(inService,"inservice")
  return (

    <Calendar 
      value={values}
      minDate={new Date()}
      onChange={(ranges:any)=>{
        console.log(ranges,"ranges")
         
          
          const isClickedOutsideUnAvailbleDates = inService.every(
            ([start, end]) => ranges.some((range:any) => range[0]?.format?.() === start && range[1]?.format?.() === end)
          );
         
          if (!isClickedOutsideUnAvailbleDates) return false;

          setValues(ranges)
      
    

        if(ranges[(inService.length)].length>1){
         let obj:any={};
        obj.startDate=ranges[inService.length][0].toDate();
        obj.endDate=ranges[inService.length][1].toDate();
        obj.key="selection"
        console.log(obj)
        onChange(obj)
        }
   
        
      }}
   
      calendar={persian}
      locale={persian_fa}
      numberOfMonths={1}
      range
      multiple
      rangeHover
       mapDays={({ date }) => {
        let className;
        const strDate = date.format();
        if (isInService(strDate)) className = "in-service";
        if (className) return { className };
      }}
     
      
    />
  );
}

export default CustomDatePicker;
