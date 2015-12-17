var express = require('express');
var router = express.Router();
var simditor_qn_config = require('../../config/simditor_qn')
/* GET home page. */
router.get('/', function (req, res, next) {
  var qn = require('qn');

  var client = qn.create(simditor_qn_config.qn);
  
  var token = client.uploadToken();
  console.log(token)
  
  res.render('demo/bootstraptable', {
    title: 'index'
  });
});

module.exports = router;
