export default class Todo {
  constructor(data){
    this._id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
}


get Template(){

    return `
    <div class="form-check one-todo">
      <div class="check-todo">
        <input class="form-check-input" type="checkbox" value="" id="${this._id}" onclick="app.todoController.toggleTodoStatus('${this._id}')">
        <label class="form-check-label" for="${this._id}">
          ${this.description}
        </label>
      </div>
      <button class="btn btn-dark text-danger remove-todo" onclick="app.todoController.removeTodo('${this._id}')">x</button>
    </div>
  
  `;
}
}