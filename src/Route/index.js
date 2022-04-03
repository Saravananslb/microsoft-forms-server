const express = require('express');
const isAuthenticated  = require('../Middleware/auth.middleware');
const authRouter = require('./auth.route');
const mailRouter = require('./form.route');

const app = express();

app.use('/auth', authRouter);
app.use('/form', isAuthenticated, mailRouter);

module.exports = app;