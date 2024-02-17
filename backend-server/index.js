const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const US_API = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d29564f928614087a89befebb57bce6c'
const BBC_API = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d29564f928614087a89befebb57bce6c'
const GERMANY_API = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=d29564f928614087a89befebb57bce6c'
const TRUMP_API = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=d29564f928614087a89befebb57bce6c'


app.get('/', async (req, res) => {
    // res.send("hello world!")
    res.json({ message: "Hello from server!" });
});

/*
    us
    bbc
    germany 
    trump
*/

app.get('/us', (req, res) => {
    fetchAPI(US_API, res);
});

app.get('/bbc', (req, res) => {
    fetchAPI(BBC_API, res);
});

app.get('/germany', (req, res) => {
    fetchAPI(GERMANY_API, res);
});

app.get('/trump', (req, res) => {
    fetchAPI(TRUMP_API, res);
});

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});

const fetchAPI = async (api, res) => {
    try {
        const response = await axios.get(api);
        res.send(response.data.articles.slice(3, 8));
      } catch (error) {
        console.error(error);
        res.status(500).send(`NODE SERVER ERROR : couldnt fetch headlines. for API ${api}`);
      }
}