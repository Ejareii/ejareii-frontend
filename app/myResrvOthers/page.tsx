'use client';

import ClientOnly from "@/src/shared/components/common/ClientOnly";
import TripsClient from "./ReservationsClient";
import EmptyState from "@/src/shared/components/common/EmptyState";
import Cookies from "js-cookie";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationsPage = async () => {
const token=Cookies.get("token");
const currentUser=await getCurrentUser(token)

  if (!currentUser) {
    return (
      <ClientOnly> 
        <EmptyState
         title="غیرمجاز"
         subtitle="لطفا ابتدا وارد شوید."
        />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({ authorId: currentUser.user_id });
 

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
            title="هیچ کالایی پیدا نشد!"
          subtitle="به نظر می‌رسد هیچ کالایی رزرو نکرده اند!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
        token={token}
      />
    </ClientOnly>
  );
}
 
export default ReservationsPage;
