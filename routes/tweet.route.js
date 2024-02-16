const express = require('express');
const tweetController = require('../controllers/tweet.controller');

const route = express.Router();

route.get('/get', tweetController.getAllTweets);
route.post('/add', tweetController.createTweet);
route.delete('/delete/:id',tweetController.deleteTweet);

module.exports = route;
