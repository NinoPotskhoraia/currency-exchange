import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime,tap } from 'rxjs';

@Component({
  selector: 'app-currency-front',
  templateUrl: './currency-front.component.html',
  styleUrls: ['./currency-front.component.scss']
})
export class CurrencyFrontComponent implements OnInit {
  public form = new FormGroup({
    amountGEL: new FormControl<number>(0),
    amountUSD: new FormControl<number>(0)
   })
   @Output() gel = new EventEmitter<number>();
   @Input() usd = 0;

  constructor() { 
   
  }
 

  ngOnInit(): void {
    this.registerValueChanges();
  }

  public registerValueChanges(){
    this.amountGEL.valueChanges
      .pipe(
        debounceTime(200),
        tap(()=>{
          this.gel.emit(this.amountGEL.getRawValue());
          // this.amountUSD.setValue(Number(this.usd));
        })
      ).subscribe();
  }


 
  get amountGEL(): FormControl<number> {
    return this.form.get('amountGEL') as FormControl<number>;
  }

  // get amountUSD(): FormControl<number> {
  //   return this.form.get('amountUSD') as FormControl<number>;
  // }

}
