const express = require('express');
const morgan = require('morgan');

const app = express();

//Configuraciones para puerto por default del ervidor o definir el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //Sirve para soportar los datos que vamos a utilizar
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//Set the port to us app to start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});