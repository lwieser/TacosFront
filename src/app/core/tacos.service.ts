import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceGeneric } from './service-generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacosService extends ServiceGeneric {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'tacos')
  }

  getToppings(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/${id}/toppings`);
  }

  getAvaibleToppings(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/${id}/avaible-toppings`);
  }
  addTopping(id: any, t: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/${id}/toppings`, t);
  }
}


