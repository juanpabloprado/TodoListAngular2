import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {TodoItemComponent} from './components/todoitem/todoitem.component';
import {TodoItemService} from './services/todoitem.service';

@Component({
    selector: 'my-app',
    providers: [TodoItemService],
    directives: [TodoItemComponent],
    template: `<div class="jumbotron">
    <h1 class="display-3">Angular 2 ToDo List</h1>
    <p class="lead">Simple ToDo List app in angular 2.</p>
</div>
<todo-item *ngFor="#todoItem of todoItems"></todo-item>`
})
export class AppComponent implements OnInit {
    public todoItems: TodoItemComponent[];
    constructor(private _todoItemService: TodoItemService) { }

    ngOnInit() {
        this.todoItems = this._todoItemService.getTodoItems();
    }

}
