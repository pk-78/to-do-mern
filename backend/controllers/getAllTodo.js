const todo = require("../models/todo");

exports.getAllTodo = async (req, res) => {
  try {
    const getdata = await todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: getdata,
      message: " Data fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "nhi fetch ho paya",
      message: err.message,
    });
  }
};
