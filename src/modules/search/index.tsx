import Map from "@/src/shared/components/common/Map";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";
import EmptyState from "@/src/shared/components/common/EmptyState";
import ListingCard from "@/src/shared/components/listing/ListingCard";

const SearchComponent = async ({ listings }: { listings: Array<RentalEntity> }) => {
    
      if (listings?.length === 0) {
        return <EmptyState showReset />
      }
      console.log(listings)
    
      return (
      <>
            <div
            className="grid 
            grid-cols-1
            sm:grid-cols-3
            bg-white
            "
            >
            
    
              <div
                className="
              pt-8
              px-2
              grid 
              grid-cols-1 
              sm:grid-cols-3
              gap-2
              col-span-2
            "
              >
                
                {listings?.map((listing: any) => (
                  <ListingCard
                    // currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                  />
                ))}
              </div>
              <div className={'h-[100vh] '}>
              <Map listings={listings} targetPath="/search"/>
              </div>
            </div>
            </>
      )
  };

  export default SearchComponent;
  