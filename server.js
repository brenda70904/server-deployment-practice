'use strict'

const express = require("express");
const logger = require("./middleware/logger.js");
const notFound = require("./handlers/404.js");
const errorHandler = require("./handlers/500.js");



const app = express();



app.get("/", logger, (req, res, next) => {
    res.status(200).send(req.log);

});

app.get("/bad", (req, res, next) => {
    //throw new Error('we have an error');
    next("we have an error");
});


app.use("*", notFound);
app.use(errorHandler);

const start = () => {
    app.listen(process.env.PORT, () => console.log("server running"))
}

module.exports = { app, start };
