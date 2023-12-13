import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Layout(props:{search:undefined|string,setSearch:any,setLogOut:any,logOut:boolean}){
    const navigate = useNavigate()
    useEffect(() => {
        if(props.logOut == false){
            navigate("/login")
        }
    },[])

    return(
        <>
        <div className="w-[100vw] bg-[#10141E] flex flex-col" >
            <header className="w-[100%] bg-[#161D2F] p-[16px] flex items-center justify-between">
                <Link to="/login" className='w-[25px] h-[20px] bg-[length:25px_20px] bg-[url("/images/logo.svg")] ' onClick={() => props.setLogOut(false) } />
                <div className="w-[133.5px] flex items-center justify-between">
                    <Link to="home" className=' w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-home.svg")]  opacity-50 ' />
                    <Link to="movies" className=' w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-movie.svg")] opacity-50 '  />
                    <Link to="series"  className=' w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-tv.svg")] opacity-50 '  />
                    <Link to="bookmarked"  className=' w-[16px] h-[16px] bg-no-repeat bg-[length:16px_16px] bg-[url("/images/icon-category-bookmark.svg")] opacity-50 '  />
                </div>
                <img className="w-[24px] h-[24px]" src="/images/image-avatar.png"  />
            </header>
            <div className="flex ml-[16px]  my-[24px]" ><img className="w-[24px] h-[24px] mr-[16px]" src="/images/icon-search.svg"  /><input className="bg-transparent focus:outline-none text-[#FFF] text-[16px] font-light" type="text" placeholder="Search for movies" onChange={(event) => props.setSearch(event.target.value)} /></div>
            <Outlet />
        </div>
        </>
    )
}

export default Layout