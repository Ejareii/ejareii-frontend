'use client';

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import {DateObject  } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


import HeartButton from "../common/HeartButton";
import Button from "../common/Button";
import Carousel from "../common/Carousel";


interface ListingCardProps {
  data: any;
  reservation?: any;
  onAction?: (id: string) => void;
  disabled?:boolean ;
  actionLabel?: string;
  actionId?: string;
  currentUser?: any | null
};
const categoryDic={
  "1":"ماشین",
  "2":"موتورسیکلت"
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {

  const router = useRouter();
  // const { getByValue } = useCountries();

  // const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
  
    const start =  new DateObject(reservation.startDate).convert(persian, persian_fa).format();
    const end = new DateObject(reservation.endDate).convert(persian, persian_fa).format();

    return `${end} - ${start}` ;
  }, [reservation]);

  return (
    <div 
      onClick={() => router.push(`/rentals/${data.rental_id}`)} 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          {/* <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          /> */}
          <Carousel imageLink={data?.images}/>
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
              listingId={data.rental_id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {"تهران"}, {"نازی آباد"}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || categoryDic[data.category_id] as string }
        </div>
        <div className="flex flex-row items-center gap-1">
        {!reservation && (
            <div className="font-light">روزانه</div>
          )}
          <div className="font-semibold">
            {price.toLocaleString()} تومان 
          </div>
        
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
   );
}
 
export default ListingCard;