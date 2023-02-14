'use strict'

const logger = (req, res, next) =>{
    req.log = "this is the logger";
    //console.log("this is console.log");
    next();
}

module.exports = logger;
