const AppError = (message, statusCode) => {
  const error = new Error(message); // Create actual Error object
  error.statusCode = statusCode; // Attach statusCode
  error.explanation = message; // Attach explanation
  Object.setPrototypeOf(error, AppError.prototype); // Maintain prototype chain
  return error;
};

// Set up the prototype chain manually
AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports = AppError;
