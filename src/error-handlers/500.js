'use strict';

function handle500(err, req, res, next) {
  // Sometimes, errors come in as an object, others as a string
  const error = err.message ? err.message : err;

  const errorObject = {
    status: 500,
    message: error
  };

  res.status(500).json(errorObject);
}

module.exports = handle500;
