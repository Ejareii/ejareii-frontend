import axios from "axios";

export default async function getListings(params:any){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let url:string;
    
    
    const {category}=params

    let queryString = '?';
    let paramsAsArray = Object.entries(params);
    paramsAsArray.forEach((param , i)=>{
      queryString +=`${param[0]}=${param[1]}${i < paramsAsArray.length - 1 ? "&" : ''}`
    })
console.log({queryString});

    if(queryString !== "?"){
     url = `${apiUrl}/v1/rentals/${queryString}`
    }else{
     url = `${apiUrl}/v1/rentals/`
    }

    try {
      const response = await axios.get(url);
  
      return response.data
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}