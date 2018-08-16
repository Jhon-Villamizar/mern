const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks',require('./routes/task.routes'));

//static file
app.use(express.static(path.join(__dirname,'public')))

//starting of server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});