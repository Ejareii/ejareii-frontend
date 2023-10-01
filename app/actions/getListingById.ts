import axios from "axios";

export default async function getListingById (params:any){
    const {id}=params
    let url=`http://localhost:9000/v1/rentals/${id}`

    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}