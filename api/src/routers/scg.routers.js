let express = require('express');
const querystring = require('querystring');
const request = require('request-promise');
let router  = express.Router();

class SCGRoutes {

  // findRange(index) {
  //   let assumption = (index + 1) * 2
  //   return { index: index, prev: assumption - 2, next: assumption + 2 }
  // }

  findXYZ() {
    return (req, res, next) => {
      let input = ['X', 5, 9, 15, 23, 'Y', 'Z']
      let result = {}
      input.map((item, index) => {
        if (typeof item === 'string') {
          if (index <= 1) {
            let nextIndex = input[index + 1]
            let next2Index = input[index + 2]
            let range = next2Index - nextIndex
            result[item] = nextIndex - (range - 2)
          } else {
            let prevIndex = input[index - 1]
            let prev2Index = input[index - 2]
            let range = prevIndex - prev2Index
            result[item] = prevIndex + (range + 2)
          }
          input[index] = result[item];
        }
      });
      next(res.json(result));
    };
  }

  findBangSueRestaurants() {
    return async (req, res, next) => {
      let params = {
        location: `13.8234866,100.5081204`,
        radius: 1000,
        type: `restaurant`,
        key: `AIzaSyCj7d3GLm5FPrtgxELqXck66oumXRFchvY`,
      };
      let query = querystring.stringify(params)
      let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${query}`;
      let response = await request(url);
      next(res.send(response));
    };
  }
}

let route = new SCGRoutes();
router
  .get('/', route.findXYZ())
  .get('/restaurants-bangsue', route.findBangSueRestaurants());
  
module.exports = router;
