const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateCategory = [
    check("name")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

    
module.exports = {validatorCreateCategory};