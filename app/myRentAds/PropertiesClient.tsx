'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/src/shared/components/common/Container";
import Heading from "@/src/shared/components/common/Heading";
import ListingCard from "@/src/shared/components/listing/ListingCard";


interface PropertiesClientProps {
  listings: any[],
  currentUser?: any | null,
  token:string
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
  token
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback((id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    setDeletingId(id);
    axios.delete(`${apiUrl}/v1/rentals/${id}`,{
      headers: {
        'authorization': `Bearer ${token}`, 
      }
    })
    .then(() => {
      toast.success('Listing deleted');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  return ( 
    <Container>
      <Heading
        title="آگهی های من"
        subtitle="لیست آگهی های شما"
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
            key={listing.rental_id}
            data={listing}
            actionId={listing.rental_id}
            onAction={onDelete}
            disabled={deletingId === listing.rental_id}
            actionLabel="حذف کردن آگهی"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default PropertiesClient;