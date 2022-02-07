const db = require("../db");

const addNewFeedback = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = await db.query(
      `INSERT INTO feedback (name, email, message) values ($1, $2, $3) RETURNING * `,
      [name, email, message]
    );
    res.status(201).json({
      status: "success",
      code: 201,
      data: res.json(newFeedback.rows[0]),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addNewFeedback };
