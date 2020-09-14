var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get userlist
router.get('/userlist', function (req, res) {
  var db = require('../db');
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('userlist', { "userlist": docs });
    });
});

//Get Novo usuario

router.get('/newuser', function(req, res){
  res.render('newuser', {title: 'Adicione novo usuário'});
});


//Adicionar usuário 


router.post('/adduser', function(req, res){
  var db = require("../db");
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  var user = new Users({ username: userName, email: userEmail});
  user.save(function (err){
    if (err){
      console.log("Ocorreu um erro! " + err.message);
      return err;
    }
    else {
      console.log("Post salvo");
      res.redirect('userlist');
    }
  });
});

module.exports = router;
