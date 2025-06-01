const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemDes: { type: String, required: true },
  itemPrice: { type: String, required: true },
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'menu', required: true }
});

module.exports = mongoose.model('item', itemSchema);
