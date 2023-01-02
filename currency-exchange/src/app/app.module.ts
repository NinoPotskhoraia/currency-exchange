import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyDataComponent } from './features/currency-data/currency-data.component';
import { CurrencyFrontComponent } from './features/currency-front/currency-front.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyDataComponent,
    CurrencyFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
