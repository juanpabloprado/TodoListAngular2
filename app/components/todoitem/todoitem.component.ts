import { Component } from 'angular2/core';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/components/todoitem/todoitem.component.html'
})
export class TodoItemComponent {
    public id: string;
    public title: string;
    public description: string;

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

}