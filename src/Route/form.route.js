const express = require('express');
const { insertForm, selectForms, updateForms, insertResponse, selectResponses } = require('../Controller/form.controller');

const router = express.Router();

router.post('/new', insertForm);
router.get('/get', selectForms);
router.put('/update', updateForms);
router.post('/add-response', insertResponse);
router.get('/get-response', selectResponses)

module.exports = router;