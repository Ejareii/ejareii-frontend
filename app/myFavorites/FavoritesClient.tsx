import Container from "@/src/shared/components/common/Container";
import Heading from "@/src/shared/components/common/Heading";
import ListingCard from "@/src/shared/components/listing/ListingCard";




interface FavoritesClientProps {
  listings: any[]
  currentUser?: any | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="مورد علاقه های من "
        subtitle="لیست محصولاتی که مورد علاقه شماست!"
      />
      <div 
        className="
          mt-10
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
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default FavoritesClient;