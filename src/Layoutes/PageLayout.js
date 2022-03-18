import { Header } from "../Components/Header"

export const PageLayout = props => {
return (
    <>
        <Header/>
        {props.children}
    </>
)
}