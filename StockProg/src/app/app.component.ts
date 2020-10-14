import { Component, OnInit} from '@angular/core';
import { StockServiceService } from './services/stock-service.service';
import { Stock } from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : String= 'StockProg app is running!';
  //message : String=null;

constructor(public stockserv : StockServiceService){}
  ngOnInit(): void {
    this.stockserv.message="This is the App Component";
  }
 
}
