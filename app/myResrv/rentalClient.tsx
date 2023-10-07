'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import Heading from "@/src/shared/components/common/Heading";
import ListingCard from "@/src/shared/components/listing/ListingCard";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";
import Container from "@/src/shared/components/common/Container";

// import { SafeReservation, SafeUser } from "@/app/types";



interface TripsClientProps {
  reservations: any,
  currentUser?: any,
  token:string
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
  token
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);


    axios.delete(`http://localhost:9000/v1/reserv/${id}`,{
      headers: {
        'authorization': `Bearer ${token}`, 
      }
    })
    .then(() => {
      router.refresh();
      console.log("shodeshhhh")
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
        title="کالاهای رزرو شده ی من"
        subtitle="چه تاریخ هایی رزو کرده اید!"
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
            actionLabel="لغو کردن اجاره"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default TripsClient;