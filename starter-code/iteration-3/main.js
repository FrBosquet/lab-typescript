"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.isDone = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.togleDone = function () {
        this.isDone = !(this.isDone);
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (todoItem) {
        this.tasks.push(todoItem);
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (e) {
            console.log((e.isDone ? 'is done' : 'pendind') + "\t" + e.title);
        });
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (e) {
            if (e.isDone === false)
                console.log((e.isDone ? 'is done' : 'pendind') + "\t" + e.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.tasks = this.tasks.filter(function (e) { return e != task; });
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
