const myMiddleware = (req, res, next) => {
  console.log('Middleware');
  // might need this is the app.use() was not in place
  next();
};

module.exports = myMiddleware;
