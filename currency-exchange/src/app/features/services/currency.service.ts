import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  // public result:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private baseUrl = 'https://v6.exchangerate-api.com/v6/c75be1838cf62fae9031d4a5/pair';


  public getCurrency():Observable<any>{
    return this.http.get(this.baseUrl + '/USD/GEL');
  }

 
}
