





import ClientOnly from "@/src/shared/components/common/ClientOnly";
import TripsClient from "./ReservationsClient";
import EmptyState from "@/src/shared/components/common/EmptyState";

const ReservationsPage = async () => {
  const currentUser = null

  if (!currentUser) {
    return (
      <ClientOnly> 
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    )
  }

//   const reservations = await getReservations({ authorId: currentUser.id });

//   if (reservations.length === 0) {
//     return (
//       <ClientOnly>
//         <EmptyState
//           title="No reservations found"
//           subtitle="Looks like you have no reservations on your properties."
//         />
//       </ClientOnly>
//     );
//   }

//   return (
//     <ClientOnly>
//       <TripsClient
//         reservations={reservations}
//         currentUser={currentUser}
//       />
//     </ClientOnly>
//   );
}
 
export default ReservationsPage;
