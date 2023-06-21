const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');

const app = express();

// init mmiddleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
dotenv.config();

// init db
require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init router

// handling error

module.exports = app;