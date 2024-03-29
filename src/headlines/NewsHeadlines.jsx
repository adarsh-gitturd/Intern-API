import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

import p from '../images/placeholder.png';

var theme_ = sessionStorage.getItem('theme');
var themeArray_;

const NewsHeadlines = (props) => {
  console.log(sessionStorage.getItem('theme'))
  const [response, setResponse] = useState([]);
  const [data, setData] = useState([]);

  const setDataValues = () => {
    if(!response) return;
    for(let i = 0; i < 5; i++) {
      if(response[i])
      setData(prevData => ([
        ...prevData,
        {
          author: response[i].author,
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

  useEffect(() => {
    // console.log(sessionStorage.getItem('theme'))  
    axios.get(props.newsheadline) 
    .then((res) => {
        for(let i = 0; i < 5; i++) {
          setResponse(prev => [...prev, res.data[i]]);
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
    theme_ = sessionStorage.getItem('theme');
    themeArray_ = theme_.split(',');

    document.documentElement.style.setProperty('--v1', themeArray_[0]);
    document.documentElement.style.setProperty('--v2', themeArray_[1]);
    document.documentElement.style.setProperty('--v3', themeArray_[2]);
    document.documentElement.style.setProperty('--v4', themeArray_[3]);
  }, []);
 
  return(
    <div>
       <div className='pl'>
      <div class='head'>Top {props.head} Headlines </div>

      <Link to='/'><div className = 'home'>Home</div></Link>

      <div className='news-container'>
      {data.map((item, index) => (
        <div className='news' key={index}>
          <p className='title'>Title: {item.title}</p>
          <p className='author'>Author: {item.author}</p>
          <p className='pub'>Published At: {item.publishedAt}</p>
          <p className='desc'>Description: {item.description}</p>
          <div className='ci'>
            <p className='content'>
              {item.content} 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur enim est asperiores facere pariatur excepturi saepe neque commodi atque suscipit explicabo nostrum libero, eveniet ipsum sed nesciunt aspernatur animi doloribus!
              Vitae similique quisquam quae amet nemo odit possimus dolore, eaque, fugiat nostrum error voluptate. Ullam sunt consequatur, vel quam mollitia consectetur quasi facilis vero! Deserunt consectetur adipisci veniam error quis?
              Inventore ipsa veniam dolore cumque pariatur ipsam fuga, quia aspernatur ad! Iure voluptatum quae soluta dignissimos consectetur aliquid fuga rem, autem ab accusamus iste id ipsa consequatur at repellendus asperiores.
              Voluptas aperiam recusandae exercitationem obcaecati asperiores ab nulla, minima possimus voluptates nisi unde alias illo esse! Fugit voluptatem inventore, aut suscipit libero amet eaque eius voluptas. Id necessitatibus at quo!
              Sunt deserunt dolorum, eveniet minus nesciunt iure quos aperiam sit assumenda enim iusto voluptatem sequi repellendus. Ea atque, cumque ducimus, quaerat quos, harum ad odit maxime voluptatum pariatur deserunt eaque?
              Expedita libero, officiis rerum nisi quod asperiores quibusdam a fugiat quo corporis sit animi iste ad eaque minima autem iusto quos odio modi excepturi iure? Cupiditate recusandae perspiciatis deserunt nobis?
              </p>
              <img src={item.urlToImage ? item.urlToImage : `${p}`} alt={item.title} className='img' />
          </div>
          <p className='src'>Source: {item.source}</p>
        </div>
      ))}
    </div>
          
        </div>
  );
      
    
    </div>
  );
};

export default NewsHeadlines;