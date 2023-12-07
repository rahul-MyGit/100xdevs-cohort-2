/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(allTodo){
    this.allTodo = [];
  }
  add(todo){
    this.allTodo.push(todo);
  }
  remove(index){
    if(this.allTodo.length == 0){
      console.log("List is empty, hence Nothing to delete");
    }
    if(index > -1){
      this.allTodo.splice(index,1);
    }
  }
  update(index,todo){
    if(index > this.allTodo.length - 1){
      return this.allTodo;
    }
    this.allTodo[index] = todo;
  }
  getAll(){
    return this.allTodo;
  }

  get(index){
    if(index > this.allTodo.length - 1){
      console.log("Invalid Index");
      return null;
    }
    return this.allTodo[index];
  }
  clear(){
    this.allTodo = [];
  }
}

module.exports = Todo;
