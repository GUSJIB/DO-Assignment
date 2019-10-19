const request = require('request');

class line {

  replyLine(reply_token, msgArray) {
      let token = `0c07kFFo8+v7YTd3735VXoNfDjFNRghTr0xx5c0Dp77DikAwpa1QjorityOvheUTAbz27GXI2hiJUxEfw1idgoY1Wu3+thaVCUr9RYn03wwPYcy+Z2/YUj3+mXg5rmXhFB38GqCPN3VPJQnTGU1o7wdB04t89/1O/w1cDnyilFU=`;
      let headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      };
  
      let body = JSON.stringify({
          replyToken: reply_token,
          messages: msgArray
      });

      console.log(body);

      request.post({
          url: 'https://api.line.me/v2/bot/message/reply',
          headers: headers,
          body: body
      }, (err, res, body) => {
          console.log('status = ' + res.statusCode);
          if (res.statusCode == 200) {
              return true;
          }
      });

      return false;
  }
  
  async messageMerchant(items) {
    let content = await items.map((item) => {
      let column = {
        "type": "bubble",
        "direction": "ltr",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": item.name,
              "size": "xl",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": [
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                  "size": "sm"
                },
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                  "size": "sm"
                },
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                  "size": "sm"
                },
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                  "size": "sm"
                },
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": "4.0",
                  "flex": 0,
                  "margin": "md",
                  "size": "sm",
                  "color": "#999999"
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "margin": "lg",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Place",
                      "flex": 1,
                      "size": "sm",
                      "color": "#AAAAAA"
                    },
                    {
                      "type": "text",
                      "text": item.vicinity,
                      "flex": 5,
                      "size": "sm",
                      "color": "#666666",
                      "wrap": true
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Time",
                      "flex": 1,
                      "size": "sm",
                      "color": "#AAAAAA"
                    },
                    {
                      "type": "text",
                      "text": "10:00 - 23:00",
                      "flex": 5,
                      "size": "sm",
                      "color": "#666666",
                      "wrap": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "flex": 0,
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "CALL",
                "uri": "tel://0000000000"
              },
              "height": "sm",
              "style": "link"
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "MAP",
                "uri": `https://maps.google.com/?q=${item.geometry.location.lat},${item.geometry.location.lng}&z=8`
              },
              "height": "sm",
              "style": "link"
            },
            {
              "type": "spacer",
              "size": "sm"
            }
          ]
        }
      }
      return column
    })
    let msg = {
      "type": "flex",
      "altText": "Bangsue Restaurant",
      "contents": {
        "type": "carousel",
        "contents": content
      }
  };

    return msg;
  }
    
  messageText(message) {
    const msg = {
        type: 'text',
        text: message
    };

    return msg;
  }
}

module.exports = line;
