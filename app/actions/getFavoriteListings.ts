import axios from "axios";

export default async function getFavoriteListings(user_id:string) {
let url=`http://localhost:9000/v1/user/getFavorite/${user_id}`
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
