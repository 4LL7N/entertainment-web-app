import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Layout(props:{search:undefined|string,setSearch:any,setLogOut:any,logOut:boolean}){
    const navigate = useNavigate()
    const [pageSwitch, setPageSwitch] = useState<number>(1)
    useEffect(() => {
        if(props.logOut == false){
            navigate("/login")
        }
    },[])

    return(
        <>
        <div className="w-[100vw] bg-[#10141E] flex flex-col md:p-[25px] lg:flex-row lg:gap-[39px] lg:p-[32px] lg:pr-[36px]" >
            <header className="w-[100%] bg-[#161D2F] p-[16px] flex items-center justify-between md:rounded-[10px] md:px-[20px] lg:flex-col lg:max-w-[96px] lg:h-[960px] lg:px-[28px] lg:pt-[35.4px] lg:pb-[32px]">
                <Link to="/login" className='w-[25px] h-[20px] bg-[length:25px_20px] bg-[url("/images/logo.svg")] md:w-[32px] md:h-[25.5px] md:bg-[length:32px_25.5px] ' onClick={() => props.setLogOut(false) } />
                <div className="w-[133.5px] flex items-center justify-between lg:flex-col lg:w-[20px] gap-y-[40px]">
                    <Link to="home" className={` w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-home.svg")]  ${pageSwitch == 1? "opacity-100":"opacity-50"} md:w-[20px] md:h-[20px] md:bg-[length:20px_20px] `}  onClick={() => setPageSwitch(1)} />
                    <Link to="movies" className={` w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-movie.svg")] ${pageSwitch == 2? "opacity-100":"opacity-50"} md:w-[20px] md:h-[20px] md:bg-[length:20px_20px] `} onClick={() => setPageSwitch(2)} />
                    <Link to="series"  className={` w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-tv.svg")] ${pageSwitch == 3? "opacity-100":"opacity-50"} md:w-[20px] md:h-[20px] md:bg-[length:20px_20px] `} onClick={() => setPageSwitch(3)} />
                    <Link to="bookmarked"  className={` w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-bookmark.svg")] ${pageSwitch == 4? "opacity-100":"opacity-50"} md:w-[20px] md:h-[20px] md:bg-[length:20px_20px] `} onClick={() => setPageSwitch(4)} />
                </div>
                <img className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]" src="/images/image-avatar.png"  />
            </header>
            <div>
                <div className="flex ml-[16px] my-[24px] md:ml-[0] md:my-[33px]" ><img className="w-[24px] h-[24px] mr-[16px] md:w-[32px] md:h-[32px] md:mr-[24px]" src="/images/icon-search.svg"  /><input className="bg-transparent focus:outline-none text-[#FFF] text-[16px] font-light md:text-[24px] " type="text" placeholder="Search for movies" onChange={(event) => props.setSearch(event.target.value)} /></div>
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default Layout