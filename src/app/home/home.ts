import { Component } from '@angular/core';
import { Counter } from '../components/counter/counter';
import { Calculator } from '../components/calculator/calculator';

@Component({
  selector: 'app-home',
  imports: [Counter, Calculator],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
