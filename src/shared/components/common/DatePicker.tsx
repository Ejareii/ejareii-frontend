'use client';

import { DateRangePicker } from 'react-dates';


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
    <DateRangePicker
  startDate={null} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={null} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={()=>{}} // PropTypes.func.isRequired,
  focusedInput={null} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={()=>{}} // PropTypes.func.isRequired,
/>
  );
}

export default CustomDatePicker;
