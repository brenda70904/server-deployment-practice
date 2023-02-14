"use strict";


// error handler, error go first
module.exports = (err, req, res, next) => {
    res.status(500).send({
        error: 500, 
        route: req.path,
        query: req.query,
        body: req.body,
        message:`server error ${err}`,
    });
}
