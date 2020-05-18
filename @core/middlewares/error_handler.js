"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors");
var errorHandler = function (err, req, res, next) {
    var error = err;
    if (!(err.family === 'base_error')) {
        error = new errors_1.Err.InternalError();
    }
    res.contentType('application/json');
    res.status(Number(error.status || 501)).send(JSON.stringify({
        message: error.message || '',
        status: error.status || '',
        code: error.code || '',
    }));
    next();
};
exports.default = errorHandler;
