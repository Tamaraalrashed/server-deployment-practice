'use strict';

//dependencies
const express=require('express');

//modules
const errorHandler=require('./error-handlers/500.js');
const notFoundHandler=require('./error-handlers/404.js');

//my app
const app=express();

//routes
app.get('/',(req,res)=>{
  res.send('Hello world, this app is working!');
});

app.get('/bad',(req,res)=>{
  throw new Error('Sorry! but something went wrong');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function listen(port){
  app.listen(port,()=>{
    console.log(`this is port ${port}`);
  });
}

module.exports={
  app:app,
  listen:listen,
};