import { fetchReview } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Review(){
    const {movieId}= useParams();
    const [reviewDataInfo, setReviewDataInfo] = useState("")
    useEffect(() => {
      async function movieReview () {
        try {
          const reviewData = await fetchReview(movieId) 
          setReviewDataInfo(reviewData);
          console.log(reviewData); 
        } catch (error) {
            console.error(error)
            
        }
      }
      movieReview();
     
    }, [movieId])
    
    
    
    
    return (
    <div>
        <ul>
{reviewDataInfo && reviewDataInfo.results.map(({id,author,content})=> (

<li key={id}>
            
            <p>{author}</p>
            <p>{content}</p>
        </li>


))}

        
    </ul>
       
    </div>
    )

}