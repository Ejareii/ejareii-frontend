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
  
  
  
  const inService = [
    [new DateObject( disabledDates[0]).convert(persian, persian_fa).format(),new DateObject( disabledDates[(disabledDates.length)-1]).convert(persian, persian_fa).format()]
  ];
  const [values, setValues] = useState(inService.flat());

function isInService(strDate:any) {
  return inService.some(([start, end]) => strDate >= start && strDate <= end);
}

  console.log(inService)
  return (

    <Calendar 
      value={values}
      minDate={new Date()}
      onChange={(ranges:any)=>{
        const isClickedOutsideUnAvailbleDates = inService.every(
          ([start, end]) => ranges.some((range:any) => range[0]?.format?.() === start && range[1]?.format?.() === end)
        );
        console.log(isClickedOutsideUnAvailbleDates)
        if (!isClickedOutsideUnAvailbleDates) return false;

        // if(value.length>1){
        //  let obj:any={};
        // obj.startDate=value[0].toDate();
        // obj.endDate=value[1].toDate();
        // obj.key="selection"
        // console.log(obj)
        // onChange(obj)
       
   
        
      }}
   
      calendar={persian}
      locale={persian_fa}
      numberOfMonths={1}
      range
      rangeHover
       mapDays={({ date }) => {
        let className;
        const strDate = date.format();
        if (isInService(strDate)) className = "in-service";
        if (className) return { className };
      }}
      // multiple
      
    />
  );
}

export default CustomDatePicker;
