import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  protected count = signal(0);

  increment() {
    this.count.update(count => count + 1);
  }

  decrement() {
    this.count.update(count => count - 1);
  }
}
