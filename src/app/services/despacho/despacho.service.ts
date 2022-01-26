import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(environment.API_URL + 'despachos');
  }

  despachar(obj: any) {
    return this.http.post(environment.API_URL + 'despachos/envio', obj);
  }
}
