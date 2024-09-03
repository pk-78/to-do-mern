const todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const response = await todo.create({ title });

    res.status(200).json({
      success: true,
      data: response,
      message: "Inserted Successfully",
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
