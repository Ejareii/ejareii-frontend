'use client';

import { DateRangePicker } from 'react-dates';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


const CustomDatePicker: React.FC<any> = ({
  value,
  onChange,
  disabledDates
}) => {



  return (
    // <DateRange
    //   //locale={faIR}
    //   rangeColors={['#262626']}
    //   // ranges={[value]}
    //   date={new Date()}
    //   // onChange={onChange}
    //   direction="vertical"
    //   //showDateDisplay={false}
    //   //minDate={new Date()}
    //   // disabledDates={disabledDates}
    // />
    // <DateRangePickerWrapper
    //   isRTL
    //   stateDateWrapper={jMoment}
    //   startDatePlaceholderText="تاریخ شروع"
    //   endDatePlaceholderText="تاریخ پایان"
    //   renderMonthText={renderMonthText}
    //   renderDayContents={renderDayContents}
    // />
    <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
  );
}

export default CustomDatePicker;
