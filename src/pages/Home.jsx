import { serviceReq } from 'api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState([]);
  console.log(title);
  useEffect(() => {
    async function updateDate() {
      try {
        const filmTrendData = await serviceReq();
        console.log(filmTrendData);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
      }
    }
    updateDate();
  }, []);
  return (
    <div>
      <p>Trending today</p>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
