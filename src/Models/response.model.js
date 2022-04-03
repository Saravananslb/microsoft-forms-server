const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    createdBy: {
        type: String
    },
    formData: {
        type: Array
    },
    formId: {
        type: String
    }
})

module.exports = mongoose.model('Response', mailSchema);