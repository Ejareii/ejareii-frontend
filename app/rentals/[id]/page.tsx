'use client';
import getCurrentUser from "@/app/actions/getCurrentUser";
//import getCurrentUser from "@/app/actions/getCurrentUser";
//import getListingById from "@/app/actions/getListingById";
//import getReservations from "@/app/actions/getReservations";

//import ClientOnly from "@/app/components/ClientOnly";
//import EmptyState from "@/app/components/EmptyState";

import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import { useLocation } from "@/src/hooks/useLocation";
import RentalMainComp from "@/src/modules/rentals/components/RentalMainComp";
import ClientOnly from "@/src/shared/components/common/ClientOnly";
import EmptyState from "@/src/shared/components/common/EmptyState";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface IParams {
  listingId?: string;
}

const ListingPage =  ({ params }: { params: IParams }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
  const [reservations, setReservations] = useState(null);
  const token = Cookies.get('token');
  let a = useLocation()
  

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const [fetchedReservations, fetchedListing, userData] = await Promise.all([
            getReservations(params),
            getListingById(params),
            getCurrentUser(token)
          ]);
  
          setReservations(fetchedReservations);
          setListing(fetchedListing);
          setCurrentUser(userData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        try {
          const [fetchedReservations, fetchedListing] = await Promise.all([
            getReservations(params),
            getListingById(params)
          ]);
  
          setReservations(fetchedReservations);
          setListing(fetchedListing);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };
  
    fetchData();
  }, [params, token]);



 
console.log("testt")


  if(loading){
    return(
      <>
      <h1></h1>
      </>
    )
  }

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
        currentUser={currentUser}
        reservations={reservations}
      />
    // </ClientOnly>
  );
}
 
export default ListingPage;
