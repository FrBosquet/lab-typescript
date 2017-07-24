// Add the reference to the interface
import { TodoInterface, TodoItemInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  isDone: boolean;
  updatedAt: Date;

  constructor (public title:string){
    this.isDone = false;
    this.updatedAt = new Date();
  }

  togleDone(){
    this.isDone = !(this.isDone);
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
  tasks: Array<TodoItemInterface>;

  constructor(){
    this.tasks = [];
  }

  addTask(todoItem : TodoItem){
    this.tasks.push(todoItem);
  }

  listAllTasks(){
    this.tasks.forEach(e=>
    {
      console.log(`${e.isDone ? 'is done' : 'pendind'}\t${e.title}`);
    })
  }

  listUncomplete(){
    this.tasks.forEach(e=>
    {
      if(e.isDone === false) console.log(`${e.isDone ? 'is done' : 'pendind'}\t${e.title}`);

    })
  }

  deleteTask(task: TodoItemInterface){
    this.tasks = this.tasks.filter(e=> e!=task);
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

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
