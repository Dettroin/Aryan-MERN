const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  if (err.name === "CastError") {
    return res.status(400).json({ success: false, message: "Invalid task ID" });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(error => error.message);
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: messages
    });
  }

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

module.exports = errorMiddleware;
