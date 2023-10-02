'use client';
import { Calendar } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"



const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {

console.log(value,"value")

  return (

    <Calendar 
      value={[value.startDate,value.endDate]}
      minDate={new Date()}
      onChange={(value:any)=>{
        if(value.length>1){
     let obj:any={};
        obj.startDate=value[0].toDate();
        obj.endDate=value[1].toDate();
        obj.key="selection"
        console.log(obj)
        onChange(obj)
        }
   
        
      }}
   
      calendar={persian}
      locale={persian_fa}
      numberOfMonths={1}
      range
      rangeHover
      // disabled={true}
    />
  );
}

export default CustomDatePicker;
