import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// API KEY : 09aae49f3e934487ab282649b8812c25
// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=09aae49f3e934487ab282649b8812c25

import bbc from './images/bbc.jpeg';
import germany from './images/germany.jpg';
import themes from './images/themes.png';
import trump from './images/trump.jpeg';
import us from './images/us.jpg';

export const scheme = [];
sessionStorage.setItem('theme', 'red');

const App = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [theme, setTheme] = useState('red');
  const [colorScheme, setColorScheme] = useState([]);
  
  
  scheme['red'] = ['rgb(255, 204, 204)', 'rgb(227, 110, 110)', 'rgb(214, 18, 18)', 'rgb(70, 0, 0)'];
  scheme['blue'] = ['rgb(204, 204, 255)', 'rgb(110, 110, 227)', 'rgb(18, 18, 214)', 'rgb(0, 0, 70)'];
  scheme['green'] = ['rgb(204, 255, 204)', 'rgb(110, 227, 110)', 'rgb(18, 214, 18)', 'rgb(0, 70, 0)'];
  scheme['black'] = ['rgb(196, 195, 192)', 'rgb(112, 112, 111)', 'rgb(46, 46, 45)', 'rgb(0, 0, 0)'];
  scheme['purple'] = ['rgb(248, 166, 255)', 'rgb(163, 67, 171)', 'rgb(96, 24, 102)', 'rgb(50, 1, 54)'];
  scheme['brown'] = ['rgb(255, 228, 196)', 'rgb(159, 129, 112)', 'rgb(121, 68, 59)', 'rgb(61, 43, 31)'];
  
  const themeMenu = () => {
    if(showTheme) setShowTheme(false);
    else
    setShowTheme(true);
  }

  useEffect(()=>{

    
    if(theme === 'red') {
      setColorScheme(scheme['red']);
    } else if(theme === 'blue') {  
      setColorScheme(scheme['blue']);
    } else if(theme === 'green') {
      setColorScheme(scheme['green']);
    } else if(theme === 'black') { 
      setColorScheme(scheme['black']);
    } else if(theme === 'purple') {
      setColorScheme(scheme['purple']);
    } else if (theme === 'brown') {
      setColorScheme(scheme['brown']);
    }
    
    console.log(sessionStorage.getItem('theme'));
  },[theme]);

  useEffect(()=>{
    sessionStorage.setItem('theme', colorScheme); 
  }, [colorScheme]);

  const SvgAnimation = () => {
    return (
      <div>
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
          <defs>
            <style>
              {`
                @keyframes rotate {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                .out-top {
                  animation: rotate 20s linear infinite;
                  transform-origin: 13px 25px;
                }
                .in-top {
                  animation: rotate 10s linear infinite;
                  transform-origin: 13px 25px;
                }
                .out-bottom {
                  animation: rotate 25s linear infinite;
                  transform-origin: 84px 93px;
                }
                .in-bottom {
                  animation: rotate 15s linear infinite;
                  transform-origin: 84px 93px;
                }
              `}
            </style>
          </defs>
          <path fill={colorScheme[0]} className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
          <path fill={colorScheme[1]} className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
          <path fill={colorScheme[2]} className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
          <path fill={colorScheme[3]} className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
        </svg>
      </div>
    );
  };
  


  return (
    <div className='app-container'>

      {showTheme && 
      <div className='theme-menu'>
        <span onClick={()=>setTheme('red')} className='red'></span>
        <span onClick={()=>setTheme('blue')} className='blue'></span>
        <span onClick={()=>setTheme('green')} className='green'></span>
        <span onClick={()=>setTheme('black')} className='black'></span>
        <span onClick={()=>setTheme('purple')} className='purple'></span>
        <span onClick={()=>setTheme('brown')} className='brown'></span>
      </div>
      }

      <SvgAnimation />

      <img className='themes' onClick={themeMenu} src={themes} alt="" />

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


