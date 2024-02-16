const tweetService = require('../services/tweet.service');

class TweetController {
  async getAllTweets(req, res) {
    try {
      const tweets = await tweetService.getAllTweets();
      res.json(tweets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTweet(req, res) {
    try {
      const { content } = req.body;
      const newTweet = await tweetService.createTweet(content, req.userId); 
      res.json(newTweet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTweet(req, res) {
    try {
      const { id } = req.params;
      const result = await tweetService.deleteTweet(id, req.userId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TweetController();
