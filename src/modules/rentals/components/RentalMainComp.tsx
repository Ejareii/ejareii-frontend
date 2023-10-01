'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
// import { toast } from "react-hot-toast";
// import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import Container from "@/src/shared/components/common/Container";
import RentalHead from "./RentalHead";
import RentalReservation from "./RentalReservation";
import RentalInfo from "./RentalInfo";
import useCategoriesStore from "@/src/hooks/useCategoriesStore";
import useLoginModal from "@/src/hooks/useLoginModal";
import { differenceInCalendarDays, differenceInDays, eachDayOfInterval } from "date-fns";


const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
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
      let dates: Date[] = [];

      reservations.forEach((reservation: any) => {
        const range = eachDayOfInterval({
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate)
        });

        dates = [...dates, ...range];
      });

      return dates;
    }, [reservations]);
    console.log(disabledDates,"disabledDates")

    const category = useMemo(() => {
       return CategoriesStore.categories.find((items) => 
        items.category_id === listing.category_id);
    }, [listing.category_id]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
          return loginModal.onOpen();
        }
        setIsLoading(true);

        // axios.post('/api/reservations', {
        //   totalPrice,
        //   startDate: dateRange.startDate,
        //   endDate: dateRange.endDate,
        //   listingId: listing?.id
        // })
        // .then(() => {
        //   toast.success('Listing reserved!');
        //   setDateRange(initialDateRange);
        //   router.push('/trips');
        // })
        // .catch(() => {
        //   toast.error('Something went wrong.');
        // })
        // .finally(() => {
        //   setIsLoading(false);
        // })
    },
    [
      totalPrice, 
      // dateRange, 
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
