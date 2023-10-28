'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

// import { SafeReservation, SafeUser } from "@/app/types"

import Heading from "@/src/shared/components/common/Heading";
import Container from "@/src/shared/components/common/Container";
import ListingCard from "@/src/shared/components/listing/ListingCard";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";

interface ReservationsClientProps {
  reservations:[],
  currentUser?: any,
  token:string,
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
  token
}) => {
  console.log(reservations)
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    setDeletingId(id);

    console.log(id)
    axios.delete(`${apiUrl}/v1/reserv/${id}`,{
      headers: {
        'authorization': `Bearer ${token}`, 
      }
    })
    .then(() => {
      console.log("ssss")
      router.refresh();
      toast.success('Reservation cancelled');
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);

  const onConfirm = useCallback((id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // setDeletingId(id);

    console.log(id)
    axios.put(`${apiUrl}/v1/reserv/${id}`,{
      headers: {
        'authorization': `Bearer ${token}`, 
      }
    })
    .then(() => { 
      router.refresh();
      toast.success('Reservation cancelled');
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  return (
    <Container>
      <Heading
        title="کالاهای من رزرو شده توسط مشتریان"
        subtitle="چه تاریخ هایی رزو کرده اند!"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {reservations.map((reservation: any) => (

          <ListingCard
            key={reservation.reservations_id}
            data={new RentalEntity (reservation.rental)}
            reservation={reservation}
            actionId={reservation.reservations_id}
            onAction={onCancel}
            disabled={deletingId === reservation.reservations_id}
            actionLabel="لغو کردن میزبانی"
            currentUser={currentUser}
            author_id={reservation.user_id}
            actionLabelInfo="مشخصات رزرو کننده"
            actionLabelConfirm="تایید کردن"
            onActionConfirm={onConfirm}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default ReservationsClient;