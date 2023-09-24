import { fetchReview } from 'service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledAuthor } from './reviews.styled';
export default function Review() {
  const { movieId } = useParams();
  const [reviewDataInfo, setReviewDataInfo] = useState('');

  useEffect(() => {
    async function movieReview() {
      try {
        const reviewData = await fetchReview(movieId);
        setReviewDataInfo(reviewData);
      } catch (error) {
        console.error('Error fetching', error);
      }
    }
    movieReview();
  }, [movieId]);

  return (
    <div>
      {reviewDataInfo.total_results === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {reviewDataInfo &&
          reviewDataInfo.results.map(({ id, author, content }) => (
            <li key={id}>
              <StyledAuthor>{author}</StyledAuthor>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
