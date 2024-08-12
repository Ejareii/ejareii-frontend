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


const mockListings = [
  {
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_001",
  name: "Cozy Cottage",
  description: "A charming and cozy cottage near the beach.",
  latitude: 35.6892,
  longitude: 51.3890,
  price: 120,
  user_id: "user_001",
  images: ["image1.jpg", "image2.jpg"],
  Strictness_number: 4,
  user: {
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  category: "ماشین"
},
{
  rental_id: "rental_002",
  name: "Modern Apartment",
  description: "A sleek and modern apartment in the city center.",
  latitude: 35.6882,
  longitude: 51.3880,
  price: 200,
  user_id: "user_002",
  images: ["image3.jpg", "image4.jpg"],
  Strictness_number: 5,
  user: {
    name: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  },
  category: "ماشین"
},
]

const Home = async ({ searchParams }: { searchParams: ISearchRentlas }) => {
  const listings = await getListings(searchParams);
  return (<LandingComponent listings={mockListings?.map((list: any) => new RentalEntity(list))} />)
}

export default Home;