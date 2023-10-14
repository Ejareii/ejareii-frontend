import axios from "axios";

export default async function getListingByAthour (params:any){
    const {userId}=params
    
   let url = `http://localhost:9000/v1/rentals/?userId=${userId}`
    console.log(url)
    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}