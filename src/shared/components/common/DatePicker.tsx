'use client';
import { Calendar } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"



const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {



  return (

    <Calendar 
      value={value}
      // onChange={onChange}
      calendar={persian}
      locale={persian_fa}
      numberOfMonths={1}
    />
  );
}

export default CustomDatePicker;
