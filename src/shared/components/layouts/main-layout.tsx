import { FC , ReactNode } from "react"
import { JsxElement } from "typescript"
import Navigation from "../navigation/navigation"


interface IMainLayout{
    children : JsxElement | ReactNode,
    currentUser:any
}
export const MainLayout:FC<IMainLayout> = (props) => {
    return (
        <>
        <Navigation currentUser={props.currentUser}/>
        {props.children}
        
        </>
    )
}