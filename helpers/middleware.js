const myMiddleware = (req, res, next) => {
  console.log('Middleware Occuring');
  next();
};

module.exports = myMiddleware;
