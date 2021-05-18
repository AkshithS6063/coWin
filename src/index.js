require('dotenv').config();
const express =  require('express');
const app = express();


app.get('/',function (req, res) {
	console.log('request on /');
	res.send('<h1>hello!</h1>');
});

app.listen(process.env.PORT, function() {
	console.log('listening on port 3000');
});
