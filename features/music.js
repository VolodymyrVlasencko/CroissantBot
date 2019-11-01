module.exports = function (controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  bby.products('categoryPath.id=cat02001',{show:`name,salePrice,image`}).then(function(data){

    controller.hears('Music', 'message', function(bot, message) {
      for (let i=0; ; i++) {
        var attachment = {
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title: data.products[i].name,
                image_url: data.products[i].image ,
                subtitle: data.products[i].salePrice + '$',
                buttons:[
                  {
                    type:'postback',
                    title:'Add to cart',
                    payload:'add-to-cart'
                  }
                ]
              },
            ]
          }
        };

        bot.reply(message, {
         text:'Here are available goods',
         quick_replies: [
           {
             title: "Main menu",
             payload: "main-menu"
           }
          ],
         attachment: attachment
        });
      }
    });
  });
}
