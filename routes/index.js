var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demo Project' });
});

module.exports = router;*/
exports.index = function(req, res){
	var str = "This project demonstarte the flow of CI"
	res.render('index', { title: str });
}