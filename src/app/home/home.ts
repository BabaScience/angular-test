import { Component } from '@angular/core';
// import { Counter } from '../components/counter/counter';
import { Calculator } from '../components/calculator/calculator';
import { TodoList } from '../components/todo-list/todo-list';

@Component({
  selector: 'app-home',
  imports: [ Calculator, TodoList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
