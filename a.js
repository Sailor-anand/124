const express=require('express');
const app=express();
const PORT=process.env.PORT || 8000;
app.get('/',(req,res)=>{
    res.send('hello docker');
});
app.listen(8000,'0.0.0.0',()=>{
    console.log('running');
});
