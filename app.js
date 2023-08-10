const express = require('express')
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log("Server is running");
})

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/registro', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})