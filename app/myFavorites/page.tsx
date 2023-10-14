
'use client';

import Cookies from "js-cookie";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "@/src/shared/components/common/EmptyState";
import FavoritesClient from "./FavoritesClient";
import getFavoriteListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
    const token=Cookies.get("token");
    const currentUser=await getCurrentUser(token)
    const listings=await getFavoriteListings(currentUser.user_id)
    console.log(listings)
    
  if (listings.length === 0) {
    return (
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
    );
  }

  return (
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />

  );
}
 
export default ListingPage;
