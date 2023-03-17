var express = require('express')
var hbs = require('hbs')
var app = express()
app.set('view engine', 'hbs')
var expressHbs = require('express-handlebars');
// app.get('/', (req, res)=>{
// 	res.render('demo')
// })
app.engine('.hbs', expressHbs.engine({extname: "hbs", defaultLayout:'dynamic', layoutsDir: "views"}));
app.listen(3000);

// var demo = {
// 	name : 'Rohan',
// 	age : 26
// };

app.get('/', (req, res)=>{
	res.render('demo');
});

