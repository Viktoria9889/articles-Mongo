const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema ({
        title: { type: String },
        text: { type: String },
});

const model = mongoose.model('title', schema);


module.exports = model;