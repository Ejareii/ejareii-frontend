import axios from "axios";

export default async function getListingById (params:any){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const {id}=params
    let url=`${apiUrl}/v1/rentals/${id}`

    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}