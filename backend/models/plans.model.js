const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    validity: { type: String, required: true }
},
    { timestamps: true, }
);

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;