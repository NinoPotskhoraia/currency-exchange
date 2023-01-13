import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime,tap,BehaviorSubject } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-front',
  templateUrl: './currency-front.component.html',
  styleUrls: ['./currency-front.component.scss']
})
export class CurrencyFrontComponent implements OnInit {
  public form = new FormGroup({
    amount: new FormControl<number>(0)
   })
   @Output() gelAmount = new EventEmitter<number>();
   @Output() usdAmount = new EventEmitter<number>();
   @Input() res:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(public srv:CurrencyService) { 
      
  }
 
  currencyFrom:BehaviorSubject<string> =  new BehaviorSubject<string>('GEL');
  currencyTo:BehaviorSubject<string> =  new BehaviorSubject<string>('USD');

  ngOnInit(): void {
    this.registerValueChanges();
  }


  public changeCurrency(){
    if(this.currencyFrom.getValue() === 'GEL'){
      this.currencyFrom.next('USD');
      this.currencyTo.next('GEL');
    }else{
      this.currencyFrom.next('GEL');
      this.currencyTo.next('USD');
    }

    this.amount.reset();
    this.res.next(0);
  }

  public registerValueChanges(){
    this.amount.valueChanges
      .pipe(
        debounceTime(200),
        tap(()=>{
          if(this.currencyFrom.getValue() === 'GEL'){
          this.gelAmount.emit(this.amount.getRawValue());
        }else{
          this.usdAmount.emit(this.amount.getRawValue());
        }
        })

      ).subscribe();

      this.amount.updateValueAndValidity();
  }


 
  get amount(): FormControl<number> {
    return this.form.get('amount') as FormControl<number>;
  }

}
