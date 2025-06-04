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
