import { Component, OnInit } from '@angular/core';

import { StocksService, IStockInterface } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<IStockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
