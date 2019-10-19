const querystring = require('querystring');
const request = require('request-promise');
const line = require('../utils/line')
const serviceLine = new line();

class SCGController {

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

  lineFood() {
    return async (req, res) => {
      let replyToken = req.body.events[0].replyToken;
      let msg = req.body.events[0].message.text;
      let body = [];

      if (msg === `หิว` || msg === `อาหาร` || msg === `ร้านอาหาร`) {
        let params = {
          location: `13.8234866,100.5081204`,
          radius: 1000,
          type: `restaurant`,
          key: `AIzaSyCj7d3GLm5FPrtgxELqXck66oumXRFchvY`,
        };
        let query = querystring.stringify(params)
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${query}`;
        let response = await request(`http://localhost:3001/scg/restaurants-bangsue`);
        let data = JSON.parse(response)
        const contentBody = await serviceLine.messageMerchant(data.results.slice(10, data.results.length));
        body.push(contentBody);
      } else {
        body.push(serviceLine.messageText(msg));
      }

      serviceLine.replyLine(replyToken, await body);
      res.sendStatus(200);
    }
  }
}

module.exports = new SCGController();