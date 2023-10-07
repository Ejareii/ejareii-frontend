
'use client';
import ClientOnly from "@/src/shared/components/common/ClientOnly";
import EmptyState from "@/src/shared/components/common/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import Cookies from "js-cookie";
import getReservations from "../actions/getReservations";
import TripsClient from "./rentalClient";



const RentalPage = async () => {
const token=Cookies.get("token");
const currentUser=await getCurrentUser(token)
//  const currentUser={
//   "user_id": "e53f577e-afe2-4980-ba6c-89c675d0591e",
//   "name": "mahdi",
//   "lastName": "jafari",
//   "email": "mahdiyarjfr@gmail.com",
//   "passwordHash": "$2b$10$37D/4W2acTXX6kPmXRY/OunERB6342oxCYBEJLqNs86QzJdJa7CsO",
//   "created_at": "2023-09-18T15:46:50.186Z",
//   "updated_at": "2023-09-18T15:46:50.186Z",
//   "user_type": "NOTADMIN"
// }


  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="غیرمجاز"
          subtitle="لطفا ابتدا وارد شوید."
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.user_id });
  console.log(reservations)

  if (reservations.length === 0||!reservations) {
    return (
      <ClientOnly>
        <EmptyState
          title="هیچ کالایی پیدا نشد!"
          subtitle="به نظر می‌رسد هیچ کالایی رزرو نکرده‌اید"
        />
      </ClientOnly>
    );
  }

  return (

      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
        token={token}
      />
 
  );
}
 
export default RentalPage;
