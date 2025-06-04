import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  protected num1 = signal(0);
  protected num2 = signal(0);
  protected result = computed(() => this.num1() + this.num2());
  protected examples = [
    { num1: 1, num2: 2, result: 3 },
    { num1: 2, num2: 3, result: 5 },
    { num1: 3, num2: 4, result: 7 },
    { num1: 4, num2: 5, result: 9 },
    { num1: 5, num2: 6, result: 11 },
  ]

  updateNum1(event: any) {
    this.num1.update(() => parseInt(event.target?.value))
  }

  updateNum2(event: any) {
    this.num2.update(() => parseInt(event.target?.value))
  }
  
  reset() {
    this.num1.set(0);
    this.num2.set(0);
  }
}
