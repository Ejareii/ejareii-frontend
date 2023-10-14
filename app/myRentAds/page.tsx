'use client';

import Cookies from "js-cookie";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "@/src/shared/components/common/EmptyState";
import ClientOnly from "@/src/shared/components/common/ClientOnly";

import getListingByAthour from "../actions/getListingByAthor";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
    const token=Cookies.get("token");
    const currentUser=await getCurrentUser(token)

  if (!currentUser) {
    return <EmptyState
      title="غیر مجاز"
      subtitle="لطفا ابتدا وارد شوید..."
    />
  }

  const listings = await getListingByAthour({ userId: currentUser.user_id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default PropertiesPage;
