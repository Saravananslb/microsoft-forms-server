const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    createdBy: {
        type: String
    },
    formData: {
        type: Array
    },
    heading: {
        type: Object
    }
})

module.exports = mongoose.model('Forms', mailSchema);