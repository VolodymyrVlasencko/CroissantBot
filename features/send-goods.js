const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

module.exports = function(controller) {

  controller.hears('Yo', 'message', function(bot, message) {

    bby.products(8880044,{show:`name,salePrice,image,class`}).then(function(data){
      console.log(data);
        var attachment = {
          title:'Avaliable goods',
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title:` ${data.products.name }`,
                image_url:` ${data.products.image }`,
                subtitle:` ${data.products.salePrice }$`,
                buttons:[
                  {
                    type:'postback',
                    title:'Buy',
                    payload:'buy'
                  }
                ]
              },
            ]
          }
        };

       bot.reply(message, {attachment: attachment,});
    });
  });
}
