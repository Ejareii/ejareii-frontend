import { FC , ReactNode } from "react"
import { JsxElement } from "typescript"
import Navigation from "../navigation/navigation"


interface IMainLayout{
    children : JsxElement | ReactNode
}
export const MainLayout:FC<IMainLayout> = (props) => {
    return (
        <>
        <Navigation/>
        {props.children}
        
        </>
    )
}