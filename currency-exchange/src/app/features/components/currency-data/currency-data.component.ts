import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-data',
  templateUrl: './currency-data.component.html',
  styleUrls: ['./currency-data.component.scss']
})
export class CurrencyDataComponent implements OnInit {

  constructor(public currencyService:CurrencyService) { }

  ngOnInit(): void {
    // this.result = this.currencyService.result;
  }

  
 public result:BehaviorSubject<number> = new BehaviorSubject<number>(0);

 public calculate(gelToConvert:number){
    this.currencyService.getCurrency()
     .pipe(
      tap(response=>{
        this.result.next(Number((response.conversion_rate * gelToConvert).toFixed(2)));
        
      })
     ).subscribe();
  }

}
