import { useState } from "react";
import data from '../../ir.json';

export const useLocation = () =>{

    console.log({data});
    
    const [activeLatLong , setActiveLatLong] = useState<[number , number]>([1,1]);

    return{
        activeLatLong,
        setActiveLatLong
    }
} 