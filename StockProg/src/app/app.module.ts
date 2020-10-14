import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockServiceService } from './services/stock-service.service';
//import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    StockListComponent
    
  ],
  imports: [
    BrowserModule,
    //FormsModule
    ReactiveFormsModule
  ],
  providers: [
    StockServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
