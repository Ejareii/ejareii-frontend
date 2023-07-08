"use client";
import {useRef} from 'react'
import { useBearStore } from "../../store/store";

//This component willaccept a server side store and send it to client side store
function StoreInitClient(params:any) {
    const initialized = useRef(false)
    if(initialized.current) {
        useBearStore.setState({bears : 5})
        initialized.current = true
    }    
    return null
}

export default StoreInitClient;