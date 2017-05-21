var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');//bring in schema

module.exports={
  show:function (req, res){
    Rabbit.find({},function(err,rabbits){
      if(err)
      {
        res.render('index',{errors:rabbits.errors})

      }
      else
      {
        res.render('index',{rabbits:rabbits});
      }
    });

  },
  find_one:function (req, res){

    Rabbit.findOne({_id:req.params.id}, function(err, rabbit) {

      if(err)
      {
        res.render('index',{errors:rabbit.errors})

      }
      else
      {
        res.render('index',{rabbit:rabbit});
      }

   });

 },
 post_all:function(req,res){

   var rabbit = new Rabbit({name:req.body.name,color:req.body.color,age:req.body.age});
   rabbit.save(function(err){
     if(err){
       console.log(err);
       res.render('myform', {errors: rabbit.errors})
     }
     else{
       res.redirect('/')
     }

   });

 },
 edit_one:function(req,res){

   Rabbit.findOne({_id:req.params.id}, function(err, rabbit) {
     if(err)
     {
       res.render('editform',{errors:rabbit.errors})

     }
     else
     {
       rabbit.name = req.body.name;
       rabbit.color = req.body.color;
       rabbit.age = req.body.age;
       console.log(rabbit);
       rabbit.save(function(err){
         if(err){
           console.log(err);
           res.render('editform', {errors: rabbit.errors})
         }
         else{
           res.redirect('/')
         }

       });
     }

  });


},
remove_one:function(req,res){
  Rabbit.remove({"_id": mongoose.Types.ObjectId(req.params.id)}, function(err){

   if(err)
   {
     res.render('index',{errors:rabbit.errors})

   }
   else
   {
     res.redirect('/');
   }
 });

}

};
