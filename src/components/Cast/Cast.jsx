import { fetchCast } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Cast(){
    const {movieId}= useParams();
    const [castDataInfo, setCastDataInfo] = useState("")
    useEffect(() => {
      async function movieCast () {
        try {
          const castData = await fetchCast(movieId) 
setCastDataInfo(castData);
          console.log(castData); 
        } catch (error) {
            console.error(error)
            
        }
      }
    movieCast();
     
    }, [movieId])
    
    
    
    
    return (
    <div><ul>
{castDataInfo && castDataInfo.cast.map(({id,character,original_name,profile_path})=> (

<li key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
            <p>{original_name}</p>
            <p>{character}</p>
        </li>


))}

        
    </ul>
       
    </div>
    )

}