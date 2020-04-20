import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IStockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {
  stocks: Array<string>;
  service: string;

  constructor(private http: HttpClient) {
    this.stocks = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
    this.service = 'https://angular2-in-action-api.herokuapp.com';
  }

  get() {
    return this.stocks.slice();
  }

  add(stock) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      const url = this.service + '/stocks/snapshot?symbols=' + symbols.join();
      console.log('Service address: ' + url);
      return this.http.get<Array<IStockInterface>>(url);
    }
  }
}
