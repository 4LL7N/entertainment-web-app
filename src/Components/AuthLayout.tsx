import { Outlet } from "react-router"

function AuthLayout(){
    
    return(
        <>
            <div className="flex flex-col items-center  w-[100vw] h-[100vh] bg-[#10141E] px-[24px] pt-[48px] pb-[170px]"  >
                <img className="mb-[58.4px]" src="/images/logo.svg" />
                <Outlet/>
            </div>
            
        </>
    )
}

export default AuthLayout