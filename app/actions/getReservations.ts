import axios from "axios";

export default async function getReservations(params:any){
    let url:string;
    const {id,userId,authorId}=params
    if(id){
     url = `http://localhost:9000/v1/reserv?rental_id=${id}`
    }else if(userId){
     url = `http://localhost:9000/v1/reserv?user_id=${userId}`
    }else if(authorId){
      url = `http://localhost:9000/v1/reserv?author_id=${authorId}`
      
    }else{
      url = `http://localhost:9000/v1/reserv?`
    }
 

    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}