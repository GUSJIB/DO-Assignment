const express = require('express')
const bodyParser = require('body-parser');
let cors = require('cors');
let scg = require('./routers/scg.routers');

const app = express()
const port = process.env.PORT || 3001;
let corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  }
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send('Hi Digital Office!!!'))
app.use('/scg', scg)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
