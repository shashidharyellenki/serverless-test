'use strict';
const mongoose = require('mogoose');
const Orders  = require('./model');

function connectDB(){
const url = "mongodb+srv://shashidhar:cOWJidpNoGKl279d@orders.qzbnrfz.mongodb.net/?retryWrites=true&w=majority"
  mongoose.connect(url);
return mongoose.connection;

}

module.exports.getData = async (event) => {
  await connectDB()
  await Orders.find()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

