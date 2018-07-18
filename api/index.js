//              _
//   __ _ _ __ (_)
//  / _` | '_ \| |
// | (_| | |_) | |
//  \__,_| .__/|_|
//      | _|


const express = require('express');
const router = express.Router();

// Proxy API to everything.

router.get('/example', function(request, response) {
  response.json({
    "greeting" : "hello from the server!"
  });
});

module.exports = router;
