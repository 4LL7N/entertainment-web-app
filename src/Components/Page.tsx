import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


interface filmdata{

    title:string
    thumbnail:{
        trending?:{
            small: string,
            large: string
        },
        regular: {
            small: string,
            medium: string,
            large: string
          }
    },
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

function categrory(icon:string){
    if(icon == "Movie"){
        return "/images/icon-category-movie.svg"
    }else if(icon == "TV Series"){
        return "/images/icon-category-tv.svg"
    }
}


function Page(props:{Filmdata:filmdata[],search:undefined|string}){
    const params = useParams()
    let Params = params.page
    let newParams = ""
    useEffect(() => {
        newParams = ""
    },[params])

    if(Params == "series" ){
        newParams = "TV Series" 
    }else if(Params == "bookmarked" ){
        newParams = "Bookmarked"
    }else{
        newParams = "Movie"
    }

    console.log(newParams);

    const [SpecificBookMark,setSpecificBookMark] = useState(true)

    let SpecificFilms:filmdata[]|never[] = []
        // console.log(item);
        // console.log("category "+ item.category);
        // console.log("isBookmarked" + item.isBookmarked);
        
        if(newParams == "Bookmarked"){

            SpecificFilms = props.Filmdata.filter((item) => item.isBookmarked == true)
        }else{
            SpecificFilms = props.Filmdata.filter((item) => item.category == newParams)
            
        } 
    
    // console.log(props.Filmdata)
    console.log(SpecificFilms)


    let SearchArr:undefined|filmdata[] = []

    function search(){
        let find = false
        SpecificFilms.forEach((item) => 
            {
                for(let i = 0 ;i < item.title.length ; i ++  ){
                    if(item.title.slice(0 + i, props.search?.length? props.search.length + i:0) == props.search){
                        find = true
                    }
                    // console.log("for " +item.title.slice(0 + i, props.search?.length? props.search.length + i:0));
                    
                }
                if(find){
                    console.log(item)
                    SearchArr?.push(item)
                    
                    
                }
                find = false
            }
        )
    
    }

    useEffect(() => {
        
        search()
        console.log("search "+ SearchArr);
    },[props.search])
    
    search()
    console.log("search log"+SearchArr);    


    return(
        <>

        {!props.search?
        <section className="flex flex-col bg-[#10141E] px-[16px] ">
            <div>
                <h1 className="text-[#FFF] text-[20px] font-light tracking-[-0.312px] mb-[16px] " >{newParams}</h1>
                <div className="flex flex-wrap gap-x-[15px] gap-y-[16px]" >
                    {SpecificFilms.map((item,index) => {
                    
                        return(
                            <div key={index} className="flex flex-col  gap-[8px]">
                                <div className="relative w-[164px] h-[110p] rounded-[8px]" >
                                    <img className="w-[100%] h-[100%] rounded-[8px]" src={item.thumbnail.regular.small} />
                                    <div className="absolute top-[8px] flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-[black] bg-opacity-40 ml-[124px]" onClick={() => {item.isBookmarked = !item.isBookmarked , setSpecificBookMark(!SpecificBookMark)}} ><img src={item.isBookmarked?"/images/icon-category-bookmark.svg":"/images/icon-bookmark-empty.svg"} /></div>
                                </div>
                            <div className="flex flex-col gap-[4px]" >
                                <div className="flex items-center gap-[6px]" >
                                    <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.year}</p>
                                    <div className="w-[2px] h-[2px] bg-[#FFF] bg-opacity-50 " />
                                    <div className="flex items-center gap-[4px]" >
                                        <img className="w-[10px] h-[10px] " src={categrory(item.category)} />
                                        <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.category}</p>
                                    </div>
                                    <div className="w-[2px] h-[2px] bg-[#FFF] bg-opacity-50 " ></div>
                                    <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.rating}</p>
                                </div>
                                <h2 className="text-[#FFF] text-[14px] font-medium " >{item.title}</h2>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        :
            <section className="flex flex-col min-h-[100vh] bg-[#10141E] px-[16px] ">
            <div>
                <h1 className="text-[#FFF] text-[20px] font-light tracking-[-0.312px] mb-[16px] " >Found {SearchArr.length} results for ‘{props.search}’</h1>
                <div className="flex flex-wrap gap-x-[15px] gap-y-[16px]" >
                    {SearchArr.map((item,index) => {
                        console.log(item + " " + index)
                        return(
                            <div key={index} className="flex flex-col  gap-[8px]">
                                <div className="relative w-[164px] h-[110p] rounded-[8px]" >
                                    <img className="w-[100%] h-[100%] rounded-[8px]" src={item.thumbnail.regular.small} />
                                    <div className="absolute top-[8px] flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-[black] bg-opacity-40 ml-[124px]" onClick={() => {item.isBookmarked = !item.isBookmarked , setSpecificBookMark(!SpecificBookMark)}} ><img src={item.isBookmarked?"/images/icon-category-bookmark.svg":"/images/icon-bookmark-empty.svg"} /></div>
                                </div>
                                <div className="flex flex-col gap-[4px]" >
                                    <div className="flex items-center gap-[6px]" >
                                        <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.year}</p>
                                        <div className="w-[2px] h-[2px] bg-[#FFF] bg-opacity-50 " />
                                        <div className="flex items-center gap-[4px]" >
                                            <img className="w-[10px] h-[10px] " src={categrory(item.category)} />
                                            <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.category}</p>
                                        </div>
                                        <div className="w-[2px] h-[2px] bg-[#FFF] bg-opacity-50 " ></div>
                                        <p className="  text-[#FFF] text-[11px] font-light opacity-75 " >{item.rating}</p>
                                    </div>
                                    <h2 className="text-[#FFF] text-[14px] font-medium " >{item.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        }
        </>
    )
}

export default Page