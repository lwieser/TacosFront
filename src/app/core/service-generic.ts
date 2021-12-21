import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class ServiceGeneric {
  url = 'http://localhost:49154/';

  constructor(protected httpClient: HttpClient, urlcomplement: string) {
    this.url += urlcomplement;
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  get(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/${id}`);
  }

  add(tacos: any) {
    return this.httpClient.post<any>(this.url, tacos);
  }

  update(tacos: any) {
    return this.httpClient.put<any>(this.url, tacos);
  }

  remove(tacos: any) {
    return this.httpClient.delete<any>(`${this.url}${tacos.id}`);
  }
}
