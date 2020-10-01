const express = require('express');
const app = express();

const hbs = require('hbs')
require('./hbs/helpers')

//Configurando heroku
const port = process.env.PORT || 3000;

//Midelware, cualquier url muestra esto
app.use(express.static(__dirname + '/public'));

//Expres HBS engine necesita npm hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('Hello World')

    res.render('home', {
        name: 'Robert',
        year: new Date().getFullYear()
    })
});

app.get('/about', function(req, res) {
    // res.send('Hello World')

    res.render('about', {
        name: 'Robert',
        year: new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})