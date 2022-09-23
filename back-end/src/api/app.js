require('express-async-errors');
const express = require('express');
const cors = require('cors');
const ErrorHandler = require('../middlewares/ErrorHandler');
const routes = require('./routes');

const API_PORT = 3001;

class App {
    constructor(app = express()) {
    this.app = app;

    this.app.use(express.json());

    this.app.use(cors());

    this.app.use(routes);
    
    this.app.use(ErrorHandler.handle);

    this.app.use(express.static('public'));
}

startServer() {
    this.app.listen(API_PORT, () => {
        console.log(`Server is running on port ${API_PORT}`);
    });
}
}

module.exports = App;