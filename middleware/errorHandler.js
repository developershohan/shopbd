// create error handler
const errorHandler = (error, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500;
  res.status(status).json({ message: error.message, success: false, status });
};

// export
export default errorHandler;
