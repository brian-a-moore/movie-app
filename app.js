// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const morgan = require('morgan');

// Application
app.listen(port, () => console.log(`-- ONLINE: Port: [${port}], Environment: [${process.env.NODE_ENV}] --`));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

// Dev Route Logging
if(process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
}

// Api Routes
app.use('/api', require('./api'));

// Static Redirect
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

// 404 Redirect
app.all('*', (req, res) => res.status(404).send('404 - Not Found'));