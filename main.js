const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render(__dirname+ '/app/views/index.ejs');
})


app.listen("8081", ()=>{
    console.log("Server Opened");
})