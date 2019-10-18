const express = require('express')
let apicache = require('apicache')
var cors = require('cors');
var scg = require('./routers/scg.routers');

const app = express()
const port = 3001
let cache = apicache.middleware
app.use(cache('5 minutes'))
let corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  }
};
app.use(cors(corsOptions));
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
