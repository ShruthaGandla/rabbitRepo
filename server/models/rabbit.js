var mongoose = require('mongoose');

var RabbitSchema = new mongoose.Schema({
  name: {type: String},
  color: {type: String},
  age:{type:Number}
});

mongoose.model('Rabbit', RabbitSchema);// We are setting this Schema in our Models as 'Quote'
var Rabbit = mongoose.model('Rabbit');
