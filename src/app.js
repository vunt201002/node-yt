const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// init mmiddleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db

// init router

// handling error

module.exports = app;