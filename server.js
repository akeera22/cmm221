const express = require('express') 
const {twig} = require('twig')

const app = express()

app.set('view engine','twig')

const homeController = require('./controller/home.controller')
const newsController = require('./controller/news.controller')

app.get('/',homeController.index)
app.get('/news',newsController.index)

app.use('/assets', express.static(__dirname +'/static/assets',{
	maxAge: 86400000
}))


app.listen(8000, function(err){
	console.log('Server is running on port 8000')
})