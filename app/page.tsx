import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <>
    <div 
          className="
            pt-24
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
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
        </div>
    </>
  );
}
