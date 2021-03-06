const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
  fbId: {
    type: Number,
    unique: true,
  },
  phone: String,
  adress: String,
  myPurchases: [String],
});

module.exports = user_schema;
