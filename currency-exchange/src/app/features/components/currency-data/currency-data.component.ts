import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-data',
  templateUrl: './currency-data.component.html',
  styleUrls: ['./currency-data.component.scss']
})
export class CurrencyDataComponent implements OnInit {

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {
  }

  
  result = 0;

 public calculate(gelToConvert:number){
     this.currencyService.getCurrency()
     .pipe(
      tap(response=>{
        this.result = response.coversion_rate * gelToConvert;
        console.log(typeof response.conversion_rate);
        
      })
     ).subscribe();
  }

}
