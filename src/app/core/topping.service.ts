import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceGeneric } from './service-generic';

@Injectable({
  providedIn: 'root'
})
export class ToppingService extends ServiceGeneric {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'topping')
  }
}
