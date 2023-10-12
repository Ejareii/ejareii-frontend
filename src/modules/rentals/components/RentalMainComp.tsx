'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
// import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import Container from "@/src/shared/components/common/Container";
import RentalHead from "./RentalHead";
import RentalReservation from "./RentalReservation";
import RentalInfo from "./RentalInfo";
import useCategoriesStore from "@/src/hooks/useCategoriesStore";
import useLoginModal from "@/src/hooks/useLoginModal";
import { differenceInCalendarDays, differenceInDays, eachDayOfInterval } from "date-fns";
import Cookies from "js-cookie";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";


const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};
type Reservation = {
  startDate: Date;
  endDate: Date;
};

// interface RentalMainCompProps {
//   reservations?: SafeReservation[];
//   listing: SafeListing & {
//     user: SafeUser;
//   };
//   currentUser?: SafeUser | null;
// }

const RentalMainComp: React.FC<any> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const CategoriesStore=useCategoriesStore()
  const loginModal = useLoginModal();
  const router = useRouter();

   const disabledDates = useMemo(() => {
    let dates: [Date, Date][] = [];
      reservations?.forEach((reservation: Reservation) => {
        const range: [Date, Date] =[
        reservation.startDate,
        reservation.endDate
        ]
        dates.push(range)
      });

      return dates;
    }, [reservations]);


    const category = useMemo(() => {
       return CategoriesStore.categories.find((items) => 
        items.category_id === listing.category_id);
    }, [listing.category_id]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState(initialDateRange);

    const onCreateReservation = useCallback(() => {
      const token=Cookies.get("token")
        if (!currentUser) {
          return loginModal.onOpen();
        }
        console.log({
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          rental_id: listing?.rental_id
        })
        // setIsLoading(true);

        axios.post('http://localhost:9000/v1/reserv/create', {
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          rental_id: String(listing?.rental_id)
        },{
          headers:{
            'authorization': `Bearer ${token}`
          }
        })
        .then(() => {
          toast.success('Listing reserved!');
          setDateRange(initialDateRange);
          router.push('/myResrv');
        })
        .catch((error) => {
          toast.error('Something went wrong.');
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false);
        })
    },
    [
      totalPrice, 
      dateRange, 
      listing?.id,
      router,
      currentUser,
      loginModal
    ]);

    useEffect(() => {
      if (dateRange.startDate && dateRange.endDate) {
        const dayCount = differenceInCalendarDays(
          dateRange.endDate, 
          dateRange.startDate
        );

        if (dayCount && listing.price) {
          setTotalPrice(dayCount * listing.price);
        } else {
          setTotalPrice(listing.price);
        }
      }
    }, [dateRange, listing.price]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <RentalHead
            title={listing.name}
            locationValue={'تهران ,نازی آباد'}
            imageSrc={'/pics/mock1.webp'}

          // imageSrc={listing.imageSrc}
          // locationValue={listing.locationValue}
          // id={listing.id}
          // currentUser={currentUser}
          />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <RentalInfo
              user={`${listing.user.name}  ${listing.user.lastName}`}
              description={listing.description}
              category={category}
              Strictness_number={listing.Strictness_number}
            // locationValue={listing.locationValue}
              listing={listing as RentalEntity}
            />
            <div
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <RentalReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value:any) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div> 
      </div>
    </Container>
  );
}

export default RentalMainComp;
