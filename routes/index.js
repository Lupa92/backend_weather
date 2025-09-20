var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "🚀 API is running on Vercel!",
    endpoints: {
      signup: "/users/signup",
      signin: "/users/signin",
      weather: "/weather",
    }
  });
});





module.exports = router;
