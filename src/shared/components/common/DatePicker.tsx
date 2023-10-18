'use client';
import { Calendar,DateObject  } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import React, { useState } from "react";



const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates,
  pendingDates
}) => {
  
  
  //
  const inPending:any=[];
  pendingDates.forEach((dateRange:any) => {
    let startDate = new DateObject(dateRange[0]).convert(persian, persian_fa).format();
    let endDate = new DateObject(dateRange[dateRange.length - 1]).convert(persian, persian_fa).format();
    inPending.push([startDate, endDate]);
});

  //
  const inService:any = [];
  disabledDates.forEach((dateRange:any) => {
    let startDate = new DateObject(dateRange[0]).convert(persian, persian_fa).format();
    let endDate = new DateObject(dateRange[dateRange.length - 1]).convert(persian, persian_fa).format();
    inService.push([startDate, endDate]);
});

 
  const initialValue = [...inPending, ...inService];
  const [values, setValues] = useState(initialValue);

function isInService(strDate:any) {
  return inService.some(([start, end]) => strDate >= start && strDate <= end);
}
function isinPending(strDate:any) {
  return inPending.some(([start, end]) => strDate >= start && strDate <= end);
}
  // console.log(inService,"inservice");
  // console.log(inPending,"inpending")
  return (

    <Calendar 
      value={values}
      minDate={new Date()}
      onChange={(ranges:any)=>{
        
         console.log(ranges)
          
        
        const isClickedOutsideUnAvailbleDatesPending = inPending.every(
            ([start, end]) => ranges.some((range:any) => range[0]?.format?.() === start && range[1]?.format?.() === end)
          );
          const isClickedOutsideUnAvailbleDates = inService.every(([start, end]) => {
            const isRangeAvailable = ranges.some((range) => {
              return range[0]?.format?.() === start && range[1]?.format?.() === end
            }
            );
            return isRangeAvailable;
          });

          console.log(isClickedOutsideUnAvailbleDates,isClickedOutsideUnAvailbleDatesPending)
          if (!isClickedOutsideUnAvailbleDates) return false;
          if (!isClickedOutsideUnAvailbleDatesPending) return false;



          setValues(ranges)
      
    

        if(ranges[(inService.length)].length>1){
         let obj:any={};
        obj.startDate=ranges[inService.length][0].toDate();
        obj.endDate=ranges[inService.length][1].toDate();
        obj.key="selection"
        // console.log(obj)
        onChange(obj)
        }
   
        
      }}
   
      calendar={persian}
      locale={persian_fa}
      numberOfMonths={1}
      range
      multiple
      // rangeHover
       mapDays={({ date }) => {
        const strDate = date.format();

        if (isInService(strDate))return  {
          disabled: true,
          style: {  color:"white", backgroundColor: "#cc0303"
          , fontWeight: "bold",
          border: "1px solid #777"},
          onClick: () => alert("روز های زررو شده غیرفعال هستند.")

        } 
        if(isinPending(strDate)) return{
          disabled: true,
          style: {  color:"white", backgroundColor: "blue"
          , fontWeight: "bold",
          border: "1px solid #777"},
          onClick: () => alert("روز های در حال بررسی غیرفعال هستند.")
        }
        // if (className) return { className,  disabled: true, };
      }}
     
      
    />
  );
}

export default CustomDatePicker;
