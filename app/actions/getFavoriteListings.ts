import axios from "axios";

export default async function getFavoriteListings(user_id:string) {
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
let url=`${apiUrl}/v1/user/getFavorite/${user_id}`
  try {
  
    if (!user_id) {
      return [];
    }
    const response = await axios.get(url);
  
    return response.data;



  } catch (error: any) {
    throw new Error(error);
  }
}
