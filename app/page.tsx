// import getListings, { IListingsParams } from "@/app/common/actions/getListings";
// import getCurrentUser from "@/app/common/actions/getCurrentUser";

import LandingComponent from "@/src/modules/landing";
import getListings from "./actions/getListing";

// interface HomeProps {
//   searchParams: IListingsParams
// };

const Home = async ({ searchParams }: any) => {
  const listings = await getListings(searchParams);
  console.log(listings)
  
  return(<LandingComponent listings={listings}/>)
}

export default Home;