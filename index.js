const express = require('express')
const app = express()
const http = require('http').Server(app)


app.use(express.static(__dirname + ''))
app.get('/', function(req,res){
	res.sendFile(__dirname + './public/index.html')
})
http.listen(3000, function(){
	console.log('port 3000')
})