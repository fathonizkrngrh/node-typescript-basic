"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({
        todos: todos,
    });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({
        message: "success add todo",
        todo: newTodo,
        todos: todos,
    });
});
router.put("/todo/:todoId", (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const id = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text,
        };
        return res.status(201).json({
            message: "updated todo",
            todo: todos[todoIndex],
            todos: todos,
        });
    }
    res.status(404).json({
        message: "cannot find todo",
    });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    return res.status(201).json({
        message: "deleted todo",
        todos: todos,
    });
});
exports.default = router;
