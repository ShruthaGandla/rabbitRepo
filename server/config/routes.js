var rabbits = require('../controllers/rabbits.js');
module.exports = function(app){

  app.get('/', function(req,res){
    rabbits.show(req,res)
  })

  app.get('/rabbits/new',function(req,res){
    res.render('myform');

  });


  app.get('/rabbits/:id', function(req,res){
    rabbits.find_one(req,res);
  });



  app.post('/rabbits',function(req,res){
    rabbits.post_all(req,res);
  });



  app.get('/rabbits/edit/:id',function(req,res){
    res.render('editform',{id:req.params.id})
  });



  app.post('/rabbits/:id',function(req,res){
    rabbits.edit_one(req,res);
  });



  app.post( '/rabbits/destroy/:id',function(req,res){
    rabbits.remove_one(req,res);
  });
  


}
