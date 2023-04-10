var express = require('express');
var app = express();
app.listen(8081,()=>{
    console.log('running on port 8081');
});

app.get('/', (req,res)=>{
    res.send('<h1>Hello duniya</h2>')
})