'use client';

import { useState } from "react";
import Map from "@/src/shared/components/common/Map";
import Container from "@/src/shared/components/common/Container";
import EmptyState from "@/src/shared/components/common/EmptyState";
import ListingCard from "@/src/shared/components/listing/ListingCard";
import MapToggleBtn from "@/src/modules/landing/components/MapToggleBtn";
import ClientOnly from "@/src/shared/components/common/ClientOnly";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";


const LandingComponent = ({ listings }: { listings: Array<RentalEntity> }) => {

  const [mapTabIsActive , setMapTabIsActive] = useState<boolean>(false)

  

  if (!listings && !mapTabIsActive) {
    return <EmptyState showReset />;
  }
 

  return (
    <ClientOnly>
      {mapTabIsActive ? (
        <div className={"h-[100vh] "}>
          <Map listings={listings}/>
        </div>
      ) : (
        <Container>
          <div
            className="
            pt-8
            pb-20
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            {listings.map((listing: any) => (
              <ListingCard
                // currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </Container>
      )}
      <MapToggleBtn
      mapTabIsActive = {mapTabIsActive}
      setMapTabIsActive = {setMapTabIsActive}
      />
    </ClientOnly>
  );
};

export default LandingComponent;
