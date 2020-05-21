var express = require('express');
var router = express.Router();
/* GET home page. */
router.route('/')
    .get((req, res) => res.json("Api Users"))
module.exports = router;