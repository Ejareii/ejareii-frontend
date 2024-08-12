import getListings from "../actions/getListing";
import SearchComponent from "@/src/modules/search";
import StructuredData from "@/src/shared/components/common/StructuredData";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";
import { WithContext, Product } from "schema-dts";

interface ISearchRentlas {
  category?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: ISearchRentlas;
}) => {
  const listings = await getListings(searchParams);

  //NOT WORKING WELL IN SERVER COMPONENTS
  // const schema: WithContext<Product> = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   color: "red",
  //   description: "very good rental",
  // };

  return (
    <>
      {/* <StructuredData data={schema} /> */}
      <SearchComponent
        listings={listings?.map((list: any) => new RentalEntity(list))}
      />
    </>
  );
};

export default SearchPage;
