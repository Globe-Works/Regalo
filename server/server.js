const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.json());

// serve files on production mode
if (process.env.NODE_ENV !== 'development') {
  app.use('/', express.static(path.resolve(__dirname, '../dist')));
}

app.get('/api/test', (req, res) => {
  res.status(200).json({ status: 'success' });
});

// catch all handler for all unknown routes
app.use((req, res) => {
  res.status(404).send('404');
});

// global error handler catches all errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));

module.exports = app;
