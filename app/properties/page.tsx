


// import getCurrentUser from "@/app/actions/getCurrentUser";
// import getListings from "@/app/actions/getListings";

import EmptyState from "@/src/shared/components/common/EmptyState";
import PropertiesClient from "./PropertiesClient";
import ClientOnly from "@/src/shared/components/common/ClientOnly";

const PropertiesPage = async () => {
//   const currentUser = await getCurrentUser();
const currentUser =null

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

//   const listings = await getListings({ userId: currentUser.id });

//   if (listings.length === 0) {
//     return (
//       <ClientOnly>
//         <EmptyState
//           title="No properties found"
//           subtitle="Looks like you have no properties."
//         />
//       </ClientOnly>
//     );
//   }

//   return (
//     <ClientOnly>
//       <PropertiesClient
//         listings={listings}
//         currentUser={currentUser}
//       />
//     </ClientOnly>
//   );
}
 
export default PropertiesPage;
