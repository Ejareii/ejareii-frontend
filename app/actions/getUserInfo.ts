import axios from "axios";

export default async function getUserInfo (userId:any){
    
   let url = `http://localhost:9000/v1/user/${userId}`
    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}