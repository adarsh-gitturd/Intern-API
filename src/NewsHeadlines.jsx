import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsHeadlines = (props) => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  //xd?
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=09aae49f3e934487ab282649b8812c25', {
      headers: {
        'X-Api-Key': '09aae49f3e934487ab282649b8812c25'
      }
    })// 
    .then(response => {
      setHeadlines(response.data.articles.slice(0, 5));
    })
    .catch(error => {
      setError('ERROR : couldnt fetch headlines.');
    });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>} 

      {headlines.map((headline, i) => (
        <div key={i}>
          <h2>{headline.title}</h2>
          <p>{headline.source.name}</p>
          <p>{headline.publishedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsHeadlines;