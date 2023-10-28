import axios from "axios";

export default async function getCurrentUser(token:string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
if(!token){
  return null
}

  const url = `${apiUrl}/v1/auth/currentUser`;  

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

