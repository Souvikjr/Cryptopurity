
 



const express = require('express');
const app = express();


 const middleware=(req,res,next)=>{
   if(req.query.formdata<=10){
    req.send('game is over')
   }else{
    next();
   }
}
app.use(middleware)
app.get('./formdata',middleware, (req,res)=> {
    res.send('')
})

module.exports = middleware;