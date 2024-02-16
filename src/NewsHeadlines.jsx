import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsHeadlines = () => {
  const [response, setResponse] = useState([]);

  // const [data, setData] = useState([
  //   {
  //     author: ' ',
  //     content: ' ',
  //     description: ' ',
  //     publishedAt: ' ',
  //     source: ' ',
  //     title: ' ',
  //     url: ' ',
  //     urlToImage: ' '
  //   }
  // ]);

  const [data, setData] = useState([]
    
  );

  const setDataValues = () => {
    if(!response) return;
    for(let i = 0; i < 5; i++) {
      if(response[i])
      setData(prevData => ([
        ...prevData,
        {
          author: "xd",
          content: response[i].content,
          description: response[i].description,
          publishedAt: response[i].publishedAt,
          source: response[i].source.name,
          title: response[i].title,
          url: response[i].url,
          urlToImage: response[i].urlToImage
        }
      ]));
    }
  }

  // useEffect(() => {
  //   console.log(data);  
  // }, [data]);

  useEffect(() => {
    axios.get('/us')
    .then((res) => {
        // console.log(res);
        for(let i = 0; i < 5; i++) {
          setResponse(prev => [...prev, res.data[i]]);
          // console.log(response.length);
        }
        
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    
  },[]);

  useEffect(() => {
    setDataValues();
  }, [response]);

  useEffect(() => {
    // console.log(response[2]);
    console.log(response);
    // console.log(data);
  }, [response]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return(
    <div>
      <h1>News Headlines</h1>
      <ul>
        {/* {data && data.map((headline, index) => (
          <li key={index}>{Object.keys(headline)}</li>
        ))} */}
      </ul>

      <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Author: {item.author}</p>
          <p>Content: {item.content}</p>
          <p>Description: {item.description}</p>
          <p>Published At: {item.publishedAt}</p>
          <p>Source: {item.source}</p>
          <p>Title: {item.title}</p>
          <p>URL: {item.url}</p>
          <p>URL to Image: {item.urlToImage}</p>
        </div>
      ))}

      {/* {Object.entries(data).map(([key, value], index) => (
        <div key={index}>
          <p>{key}: {value}</p>
        </div>
      ))} */}
    </div>

    </div>
  );
};

export default NewsHeadlines;