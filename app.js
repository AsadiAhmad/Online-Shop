const express = require('express');
const path = require('path');
const port = 5656;

const routeMain = require(path.join(__dirname, 'public', 'JS', 'BackEnd', 'Route', 'MainRoute.js'));
const routeLogin = require(path.join(__dirname, 'public', 'JS', 'BackEnd', 'Route', 'LoginRoute.js'));

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routeMain);
app.use('/Login', routeLogin);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});