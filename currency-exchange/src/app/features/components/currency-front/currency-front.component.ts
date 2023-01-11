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
    amountGEL: new FormControl<number>(0)
   })
   @Output() gelAmount = new EventEmitter<number>();
   @Input() usd:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(public srv:CurrencyService) { 
      
  }
 

  ngOnInit(): void {
    // this.usd = this.srv.result;
    this.registerValueChanges();
  }

  public registerValueChanges(){
    this.amountGEL.valueChanges
      .pipe(
        debounceTime(200),
        tap(()=>{
          this.gelAmount.emit(this.amountGEL.getRawValue());
        })

      ).subscribe();

      this.amountGEL.updateValueAndValidity();
  }


 
  get amountGEL(): FormControl<number> {
    return this.form.get('amountGEL') as FormControl<number>;
  }

}
