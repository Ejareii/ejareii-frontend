// import getListings, { IListingsParams } from "@/app/common/actions/getListings";
// import getCurrentUser from "@/app/common/actions/getCurrentUser";

import LandingComponent from "@/src/modules/landing";
import getListings from "./actions/getListing";
import { RentalEntity } from "@/src/shared/dtos/rental.dto";

// interface HomeProps {
//   searchParams: IListingsParams
// };

interface ISearchRentlas {
  category?: string;
  lat?:number;
  lng?:number;
  zoom?:number;
}

const Home = async ({ searchParams }: { searchParams: ISearchRentlas }) => {
  const listings = await getListings(searchParams);
  return (<LandingComponent listings={listings.map((list: any) => new RentalEntity(list))} />)
}

export default Home;