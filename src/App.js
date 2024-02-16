import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// API KEY : 09aae49f3e934487ab282649b8812c25
// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=09aae49f3e934487ab282649b8812c25

import trump from './images/trump.jpeg';
import bbc from './images/bbc.jpeg';
import us from './images/us.jpg';
import germany from './images/germany.jpg';

const App = () => {
  return (
    <div className='app-container'>
      <div className='apiapi'>News API Headlines</div>

      <div className='images-container'>
        <div className='e'>
          <Link to='/us'><img src={us} alt="" /></Link>
          <div className='news-text'>US</div>
        </div>

        <div className='e'>
          <Link to='/germany'><img src={germany} alt="" /></Link>
          <div className='news-text'>Germany</div>
        </div>

        <div className='e'>
          <Link to='/trump'><img src={trump} alt="" /></Link>
          <div className='news-text'>Trump</div>
        </div>
        <div className='e'>
          <Link to='/bbc'><img src={bbc} alt="" /></Link>
          <div className='news-text'>BBC</div>
        </div>
      </div>

    </div>
  );
}

export default App;
