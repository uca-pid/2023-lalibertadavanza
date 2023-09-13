const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateFood = [
    check("name")
    .exists()
    .notEmpty(),
    check('calories')
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

    
module.exports = {validatorCreateFood};