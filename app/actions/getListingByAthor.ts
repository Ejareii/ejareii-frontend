import axios from "axios";

export default async function getListingByAthour (params:any){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const {userId}=params
    
   let url = `${apiUrl}/v1/rentals/?userId=${userId}`
    console.log(url)
    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}