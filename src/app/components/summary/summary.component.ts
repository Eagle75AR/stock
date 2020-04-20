import { Component, Input } from '@angular/core';
import { IStockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() stock: IStockInterface;

  constructor() { }

  // ngOnInit(): void {
  // }

  isNegative() {
    return (this.stock && this.stock.change < 0);
  }
  isPositive() {
    return (this.stock && this.stock.change > 0);
  }

}
