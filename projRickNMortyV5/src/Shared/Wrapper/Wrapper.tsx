import { Outlet } from "react-router-dom"
import { Header } from "../../Components/header"


export const Wrapper = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
        </>



    )
}

