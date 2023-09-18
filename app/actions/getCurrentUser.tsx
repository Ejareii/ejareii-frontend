import axios from "axios";

export default async function getCurrentUser(token:string) {
  const url = 'http://localhost:9000/v1/auth/currentUser';  

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      }

    });

    return response.data;
  } catch (error) {
   
    console.error('Error fetching current user:', error);
  
  }
    
  }

