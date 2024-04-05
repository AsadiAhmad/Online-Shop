const express = require('express');
const path = require('path');
const port = 5656;

const routeMain = require(path.join(__dirname, 'public', 'JS', 'BackEnd', 'Route', 'MainRoute.js'));
const routeLogin = require(path.join(__dirname, 'public', 'JS', 'BackEnd', 'Route', 'LoginRoute.js'));
const routeProduct = require(path.join(__dirname, 'public', 'JS', 'BackEnd', 'Route', 'ProductRoute.js'));
const routeLogging = require(path.join(__dirname, 'public','JS', 'BackEnd', 'Route', 'LoggingRoute.js'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/', routeMain);
app.use('/Login', routeLogin);
app.use('/Product', routeProduct);
app.use('/api/Login', routeLogging);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});