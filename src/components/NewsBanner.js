import { useContext } from 'react';
import { useQuery } from 'react-query';

import { NewsContext } from '../contexts/Context';

import '../styles/NewsBanner.css';

export const NewsBanner = () => {
  const ctx = useContext(NewsContext);

  const { data, isLoading } = useQuery('news', async () => {
    const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_156144dcdd004a820952fef75ddb3f1140c5c&country=us');
    const newsData = await response.json();
    return newsData?.results;
  });

  if (!ctx.isNewsShown) {
    return (
      <div className='ticker'></div>
    )
  }

  return (
    <div className='ticker-container'>
    <div className="ticker-wrap">
    {!ctx.isNewsShown && <div className="ticker__item" />}
      <div className="ticker">
        {isLoading ? <p className='ticker__item'>News are loading...</p> :
        (data.map((item, index) =>
          <p className='ticker__item' key={index}>{item.title}</p>
        ))
        }
      </div>
    </div>
    </div>
  )
}