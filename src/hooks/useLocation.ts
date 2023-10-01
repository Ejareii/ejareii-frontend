import { useState } from "react"

export const useLocation = () =>{
    const [activeLatLong , setActiveLatLong] = useState<[number , number]>([1,1]);

    return{
        activeLatLong,
        setActiveLatLong
    }
} 