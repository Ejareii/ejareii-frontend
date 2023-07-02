import { FC } from "react"
import { JsxElement } from "typescript"

interface IMainLayout{
    children : JsxElement
}
export const MainLayout:FC<IMainLayout> = (props) => {
    return (
        <>{props.children}</>
    )
}