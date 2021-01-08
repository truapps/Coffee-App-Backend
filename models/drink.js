const { Schema, model } = require('mongoose');

let drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    prices: {
        smallSize: Number,
        mediumSize: Number,
        bigSize: Number
    }
});

module.exports = model('Drink', drinkSchema);
