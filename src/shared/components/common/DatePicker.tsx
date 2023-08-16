'use client';
import { Calendar } from 'react-multi-date-picker';
import persian_fa from "react-date-object/locales/persian_fa"



const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {



  return (

    <Calendar 
      value={value}
      onChange={()=>{}}
      locale={persian_fa}
      numberOfMonths={2}
      range
    />
  );
}

export default CustomDatePicker;
