import getListings from "../actions/getListing";
import SearchComponent from "@/src/modules/search";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";


interface ISearchRentlas {
  category?: string;
  lat?:number;
  lng?:number;
  zoom?:number;
}

const SearchPage = async ({ searchParams } : { searchParams: ISearchRentlas }) => {
  const listings = await getListings(searchParams);
  return (
    <SearchComponent listings={listings?.map((list: any) => new RentalEntity(list))}/>
  )
}

export default SearchPage;