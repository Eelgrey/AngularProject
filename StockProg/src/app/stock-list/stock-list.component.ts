import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../services/stock-service.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stock : Stock[];
  constructor(private stockServ: StockServiceService) {

   }

  ngOnInit() {
    this.stockServ.getStocks()
    .subscribe(stocks => {
    this.stock = stocks;
    });
    }

}
