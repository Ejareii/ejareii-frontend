"use client";
import {useRef} from 'react'
import * as stores  from "../../store/store";
//This component willaccept a server side store and send it to client side store
function StoreInitClient({storeName , params}:{
    storeName:string , params:any
}) {
    console.log(stores);
    
    const initialized = useRef(false)
    if(initialized.current) {
        //@ts-ignore
        stores[storeName].setState({bears : 5})
        initialized.current = true
    }    
    return null
}

export default StoreInitClient;