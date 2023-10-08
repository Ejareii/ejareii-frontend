'use client';
import getCurrentUser from "@/app/actions/getCurrentUser";
//import getCurrentUser from "@/app/actions/getCurrentUser";
//import getListingById from "@/app/actions/getListingById";
//import getReservations from "@/app/actions/getReservations";

//import ClientOnly from "@/app/components/ClientOnly";
//import EmptyState from "@/app/components/EmptyState";

import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
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
  
  

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const fetchedReservations = await getReservations(params);
        setReservations(fetchedReservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, [params]);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const fetchedListing = await getListingById(params);
        setListing(fetchedListing);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }finally {
        setLoading(false);  // Set loading to false once data is fetched or there's an error
      }
    };

    fetchListing();
  }, [params]);

 
  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (token) {
        try {
          const userData = await getCurrentUser(token);
          setCurrentUser(userData);
        } catch (error) {
          console.error('Error fetching current user:', error);
        }
      }
    };

    fetchCurrentUser();
  }, [token]);




//todo:
  // console.log(listing,"sss")
  // console.log(currentUser,"aaa")
 



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
  console.log(currentUser)
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
