const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { getAllTodo } = require("../controllers/getAllTodo");

router.post("/createtodo", createTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getAllTodo", getAllTodo);

module.exports = router;
