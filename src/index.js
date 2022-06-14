//requires
const express = require('express');
const morgan = require ('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { urlencoded } = require('express');
//initializations
const  app = express();

//settings 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');



//Middlewares
app.use(morgan('dev'));
//app.use(express,urlencoded({extended:false}));
app.use(express.json());

//Global Variables


//Routes 
app.use(require('./routes/index.js'))
//Public


//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});