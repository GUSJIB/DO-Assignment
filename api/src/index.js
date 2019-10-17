const express = require('express')
let apicache = require('apicache')
var scg = require('./routers/scg.routers');

const app = express()
const port = 3001
let cache = apicache.middleware
app.use(cache('5 minutes'))

app.get('/', (req, res) => res.send('Hi Digital Office!!!'))
app.use('/scg', scg)

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
