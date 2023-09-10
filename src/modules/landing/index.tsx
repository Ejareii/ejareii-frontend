'use client';

import { useState } from "react";
import Map from "@/src/shared/components/common/Map";
import Container from "@/src/shared/components/common/Container";
import EmptyState from "@/src/shared/components/common/EmptyState";
import ListingCard from "@/src/shared/components/listing/ListingCard";
import MapToggleBtn from "@/src/modules/landing/components/MapToggleBtn";
import ClientOnly from "@/src/shared/components/common/ClientOnly";


const LandingComponent = () => {

  const [mapTabIsActive , setMapTabIsActive] = useState<boolean>(false)

  const listings = [
    {
      id: "6152b8ee11e2e40a362cd4a1",
      title: "Luxurious Beach House",
      description:
        "Experience the ultimate beachfront vacation in this luxurious house.",
      imageSrc:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      createdAt: "2023-08-21T10:00:00Z",
      category: "ماشین ",
      roomCount: 4,
      bathroomCount: 3,
      guestCount: 8,
      locationValue: "Beachfront",
      userId: "6152b8ee11e2e40a362cd499",
      price: "500,000",
    },
    {
      id: "6152b8ee11e2e40a362cd4a2",
      title: "Cozy Mountain Cabin",
      description:
        "Escape to the mountains and enjoy the serenity of nature in this cozy cabin.",
      imageSrc:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      createdAt: "2023-08-20T15:30:00Z",
      category: "ماشین",
      roomCount: 2,
      bathroomCount: 1,
      guestCount: 4,
      locationValue: "Mountain Retreat",
      userId: "6152b8ee11e2e40a362cd49a",
      price: 300,
    },
    {
      id: "6152b8ee11e2e40a362cd4a3",
      title: "Downtown Loft Apartment",
      description:
        "Experience city living at its finest in this modern downtown loft.",
      imageSrc:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      createdAt: "2023-08-19T12:45:00Z",
      category: "ماشین",
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 2,
      locationValue: "City Center",
      userId: "6152b8ee11e2e40a362cd49b",
      price: 150,
    },
  ];

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <ClientOnly>
      {mapTabIsActive ? (
        <div className={"h-[100vh] "}>
          <Map />
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
