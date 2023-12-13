import styled from "styled-components"


interface filmdata{

    "title":string
    "thumbnail":{
        "trending":{
            "small": string,
            "large": string
        },
        "regular": {
            "small": string,
            "medium": string,
            "large": string
          }
    },
    "year": number,
    "category": string,
    "rating": string,
    "isBookmarked": boolean,
    "isTrending": boolean
}

function Home(props:{Filmdata:any}){
    
    return(
        <>
        <section className="flex bg-[#10141E]">
            <div>
                <h1>Trending</h1>
                <div className="flex overflow-y-scroll w-[100vw]">
                    {props.Filmdata.map((item:filmdata,index:number) => {
                        console.log(item)
                        console.log(item.thumbnail.trending?.small)
                        return(
                            item.isTrending?<TrendingImg key={index} item={item} > id</TrendingImg>:null
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Home

interface trendingType{
    item:filmdata
}

const TrendingImg = styled.div<trendingType>`

    width:100px ;
    height: 50px;
    background-image: url({${({item}) => item.thumbnail.trending.small}}});
    background-repeat: no-repeat;
    background-size: cover;

`