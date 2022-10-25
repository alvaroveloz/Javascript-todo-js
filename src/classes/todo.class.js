export class Todo {

    static fromJSON( { task, id, completed, created_at }) {
        // To convert to instance of Class Todo
        const tempTodo = new Todo( task);
        tempTodo.id         = id;
        tempTodo.completed  = completed;
        tempTodo.created_at = created_at;

        return tempTodo;
    }
    
    constructor(task) {
        this.task = task;

        this.id = new Date().getTime(); // 12836871263
        this.completed = false;
        this.created_at = new Date();
    }

printTodo() {
    console.log(`${ this.task } - created at ${ this.created_at}`)
}

}