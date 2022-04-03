const formModel = require('../Models/form.model');
const responseModel = require('../Models/response.model');

const createForm = async(body, userId) => {
    const create = new formModel({
        createdBy: userId, formData: body.formData,
        heading: body.heading
    });
    const form = await create.save();
    return form._doc;
}

const getForm = async(userId,formId, formAction) => {
    if (formAction === "FILL") {
        const forms = await responseModel.find({ createdBy: userId, formId: formId});
        if (forms.length > 0){
            return false;
        }
    }

    if (formId){
        const forms = await formModel.find({ createdBy: userId, _id: formId });
        return forms;
    }
    const forms = await formModel.find({ createdBy: userId });
    return forms;
}

const getResponse = async(userId,formId) => {
    const forms = await responseModel.find({ formId: formId });
    return forms;
    
}

const editForm = async(formId, formData, userId, heading) => {
    const update = await formModel.findOneAndUpdate({_id: formId, createdBy: userId }, {formData: formData, heading: heading});
    return update;
}

const createResponse = async(formData, formId, userId) => {
    const create = new responseModel({
        formId: formId, formData: formData,
        createdBy: userId
    });
    const form = await create.save();
    return form._doc;
}

module.exports = {
    createForm,
    getForm,
    editForm,
    createResponse,
    getResponse
}