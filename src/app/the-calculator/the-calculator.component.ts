import { Component } from '@angular/core';

@Component({
  selector: 'app-the-calculator',
  templateUrl: './the-calculator.component.html',
  styleUrl: './the-calculator.component.css'
})
export class TheCalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public operation: string = '+';

  public operations: string[] = ['+', '-', '*', '/'];

  public result?: number;

  public calc() {
    switch(this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }
}
