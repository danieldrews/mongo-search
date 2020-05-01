exports.use = (app) => {
  app.use((err, req, res, next) => {
    let errCode, errMessage;
  
    if (err.errors) {
      errCode = 400 // bad request
      const keys = Object.keys(err.errors)
      errMessage = err.errors[keys[0]].message
    } else {
      errCode = err.status || 500
      errMessage = err.message || 'Internal Server Error'
    }
  
    res.status(errCode).type('txt').send(errMessage)
  });
}