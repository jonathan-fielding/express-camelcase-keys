'use strict';

const camelcaseKeys = require('camelcase-keys');

module.exports = function expressCamelcaseKeys(req, res, next) {
    req.body = camelcaseKeys(req.body);

    next();
};