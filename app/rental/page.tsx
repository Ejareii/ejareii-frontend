

// import getCurrentUser from "@/app/actions/getCurrentUser";
// import getReservations from "@/app/actions/getReservations";

import ClientOnly from "@/src/shared/components/common/ClientOnly";
import EmptyState from "@/src/shared/components/common/EmptyState";

// import TripsClient from "./TripsClient";

const RentalPage = async () => {
//   const currentUser = await getCurrentUser();
const currentUser=null

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );
  }

//   const reservations = await getReservations({ userId: currentUser.id });

//   if (reservations.length === 0) {
//     return (
//       <ClientOnly>
//         <EmptyState
//           title="No trips found"
//           subtitle="Looks like you havent reserved any trips."
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
 
export default RentalPage;
