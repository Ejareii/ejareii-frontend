
//import getCurrentUser from "@/app/actions/getCurrentUser";
//import getListingById from "@/app/actions/getListingById";
//import getReservations from "@/app/actions/getReservations";

//import ClientOnly from "@/app/components/ClientOnly";
//import EmptyState from "@/app/components/EmptyState";

import getListingById from "@/app/actions/getListingById";
import RentalMainComp from "@/src/modules/rentals/components/RentalMainComp";
import ClientOnly from "@/src/shared/components/common/ClientOnly";
import EmptyState from "@/src/shared/components/common/EmptyState";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  console.log(params)

  const listing = await getListingById(params);
  console.log(listing,"sss")
  // const reservations = await getReservations(params);
  // const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
   
    // <ClientOnly>
      <RentalMainComp
        listing={listing}
        // reservations={reservations}
        // currentUser={currentUser}
      />
    // </ClientOnly>
  );
}
 
export default ListingPage;
