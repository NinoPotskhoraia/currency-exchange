import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-front',
  templateUrl: './currency-front.component.html',
  styleUrls: ['./currency-front.component.scss']
})
export class CurrencyFrontComponent implements OnInit {
  public form = new FormGroup({
    currency1: new FormControl('', [Validators.required, Validators.pattern(/^(GEL|USD)$/)]),
    amount1: new FormControl(''),
    currency2: new FormControl('', [Validators.required, Validators.pattern(/^(GEL|USD)$/)]),
    amount2: new FormControl('')
   })

  constructor() { }

  ngOnInit(): void {
    this.registerValueChanges();
  }

  public registerValueChanges(){

  }


  get currency1(): FormControl {
    return this.form.get('currency1') as FormControl;
  }
  get amount1(): FormControl {
    return this.form.get('amount1') as FormControl;
  }
  get currency2(): FormControl {
    return this.form.get('currency2') as FormControl;
  }
  get amount2(): FormControl {
    return this.form.get('amount2') as FormControl;
  }

}
