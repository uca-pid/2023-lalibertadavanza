const { goalModel } = require("../models");
const { handleHttpError } = require("../utils/handleErrors");

const getGoalsByUserId = async (req, res) => {
    try {
        const data = await goalModel.find({ userId: req.params.userId });
        res.send({ data });
      } catch (e) {
        handleHttpError(res, "ERROR_GET_GOALS_BY_USER_ID", 500);
      }
}

const createGoal = async (req, res) => {
  try {
    const data = await goalModel.create(req.body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_GOAL", 500);
  }
}

module.exports = { getGoalsByUserId, createGoal };
  