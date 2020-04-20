import { SummaryComponent } from './components/summary/summary.component';
import { Component } from '@angular/core';
import { StocksService, IStockInterface } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<IStockInterface>;
  // title = 'stock';

  constructor(service: StocksService) {
    service.load([service.stocks]).subscribe(stocks => {
      this.stocks = stocks;

      /*
      if (stocks){
        console.log('STOCKS ' + stocks.length);
        for (let stock of stocks){
          console.log('STOCK symbol: ' + stock.symbol);
          console.log('STOCK lastTradePriceOnly: ' + stock.lastTradePriceOnly);
          console.log('STOCK change: ' + stock.change);
          console.log('STOCK changeInPercent: ' + stock.changeInPercent);
        }
      }
      */
    });
  }
}
