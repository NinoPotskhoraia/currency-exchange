import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDataComponent } from './components/currency-data/currency-data.component';
import { CurrencyFrontComponent } from './components/currency-front/currency-front.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CurrencyDataComponent, CurrencyFrontComponent],
  imports: [
    CommonModule, SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component:CurrencyDataComponent
     }
       
    
    ])
  ]
})
export class CurrencyModule { }
