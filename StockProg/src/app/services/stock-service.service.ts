import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs/internal/Observable/of';
import { throwError as ObservableThrow } from 'rxjs/internal/Observable/throwError';
import { Stock } from '../stock';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class StockServiceService {

  private stocks: Stock[];
  public message : String;
  constructor() {
  this.stocks = [
  new Stock('DMMY1', 'Accenture1', 'ACC1', 350, 800),
  new Stock('DMMY2', 'Accenture2', 'ACC2', 360, 800),
  new Stock('DMMY3', 'Accenture3', 'ACC3', 370, 800)
  ];
  }
  getStocks() : Observable<Stock[]> {
  return ObservableOf(this.stocks);
  }
  createStock(stock: Stock) : Observable<any> {
  let foundStock = this.stocks.find(each => each.code === stock.code);
  if (foundStock) {
    return ObservableThrow(false);
  }
  this.stocks.push(stock);
  return ObservableThrow(true);
  }
  toggleFavorite(stock: Stock) {
  let foundStock = this.stocks.find(each => each.code === stock.code);
  foundStock.addFav = !foundStock.addFav;
  }
  // getMessage(messages:String): String{
  //   this.message=messages;
  //   return this.message;
  // }
 }

