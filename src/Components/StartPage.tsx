import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

function StartPage(){
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/website")
    },[])
    return(
        <>
            
                <Outlet/>
            
        </>
    )
}

export default StartPage