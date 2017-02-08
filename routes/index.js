var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db,
      testCollection = db.get('test');

  testCollection.find({}, {}, function(e, docs) {
    res.render('index', { title: 'Test', data: docs });
  });
});

router.get('/deck', function(req, res, next) {
  res.render('deck', { title: 'Shuffling' });
});

module.exports = router;
