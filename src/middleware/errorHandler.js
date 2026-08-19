function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
}

function errorHandler(error, req, res, next) {
  console.error(error);

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server error',
  });
}

module.exports = { notFoundHandler, errorHandler };