import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { StockServiceService } from '../services/stock-service.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
 // providers : [StockServiceService]
})
export class CreateStockComponent implements OnInit {
  // public stock: Stock;
  // public resetVal:boolean;
  // public confirm=false;
  // public stockType:String;
  // public name:String;
  // public code:String;
  // public price:number;

  // constructor() {
  //   //this.stock = new Stock('DMMY', 'Accenture', 'ACC', 350, 800);
    
  // }
// removeStock() {
  //   this.stock.name = null;
  //   this.resetVal=false;
  // }
  // addStock(){
  //   this.stock=new Stock(
  //     this.stockType, this.name, this.code, this.price, 500);
  //     this.resetVal = true;
  // }


  // REactive forms
  public stock: Stock;
  public resetVal:boolean;
  public typeControl = new FormControl();
  public nameControl = new FormControl();
  public codeControl = new FormControl();
  public priceControl = new FormControl();
  public confirm=false;
  public message: String;
  public stocks:Stock[];

    constructor(public stockserv: StockServiceService) {
    this.resetVal = false;
  }
  ngOnInit():void {
    
    }
  
  addStock(){
    this.stock=new Stock(
      this.typeControl.value,this.nameControl.value, this.codeControl.value,this.priceControl.value,700);
      this.resetVal = true;
      if(this.stockserv.createStock(this.stock).subscribe((result: any)=>{
       this.stockserv.message=`Successfully created stock with code --${this.stock.code}`;
      }
      ))
      this.stockserv.getStocks()
    .subscribe(stocks => {
    this.stocks = stocks;
    });
  }

}
