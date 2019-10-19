let express = require('express');
let router  = express.Router();
let apicache = require('apicache')
let cache = apicache.middleware
const scgController = require('../controllers/scg.controller');

let route = scgController;
router
  .get('/', cache('60 minutes'), route.findXYZ())
  .get('/restaurants-bangsue', cache('60 minutes'), route.findBangSueRestaurants())
  .post('/bangsue-food', route.lineFood());
  
module.exports = router;
