import { Inject, Injectable } from 'angular2/core';
import {TodoItemComponent} from '../components/todoitem/todoitem.component'

@Injectable()
export class TodoItemService {
    
  getTodoItems() {
    var todoitems = new Array<TodoItemComponent>();
    todoitems.push(new TodoItemComponent("1","todoitem1","todoitemdescription1"));
    todoitems.push(new TodoItemComponent("2","todoitem2","todoitemdescription2"));
    todoitems.push(new TodoItemComponent("3","todoitem3","todoitemdescription3"));
    return todoitems;
  }
}