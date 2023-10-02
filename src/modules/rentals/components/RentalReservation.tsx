'use client';

import Button from "@/src/shared/components/common/Button";
import DatePicker from "@/src/shared/components/common/DatePicker";

// import { Range } from "react-date-range";

// import Button from "../Button";
// import Calendar from "../inputs/Calendar";

interface RentalReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const RentalReservation: React.FC<
  any
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div className=" 
      flex flex-row items-center gap-1 p-4">
          <div className="font-light text-neutral-600">
          قیمت روزانه :
        </div>
        <div className="text-2xl font-semibold">
         {price} تومان 
        </div>
      
      </div>
      <hr />
      <DatePicker
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value:any) => 
          onChangeDate(value)}
      />
      <hr />
          <div className="p-4">
        <Button 
          disabled={disabled} 
          label="رزرو کردن" 
          onClick={onSubmit}
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
      <div>
          قیمت کل :
        </div>
        <div>
         {totalPrice} تومان
        </div>
      
      </div>
    </div>
   );
}
 
export default RentalReservation;