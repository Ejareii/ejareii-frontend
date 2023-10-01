import axios from "axios";

export default async function getListings(params:any){
    let url:string;
    const {category}=params
    if(category){
     url = `http://localhost:9000/v1/rentals/?category-name=${category}`
    }else{
     url = `http://localhost:9000/v1/rentals/`
    }

    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}