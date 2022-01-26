import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalService {  

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(environment.API_URL + 'modais');
  }
  public save(obj: any) {
    return this.http.post(environment.API_URL + 'modais', obj);
  }

  public update(id: number, obj: any) {
    return this.http.put(environment.API_URL + 'modais/' + id, obj);
  }

  public get(id: number) {
    return this.http.get(environment.API_URL + 'modais/' + id);
  }

  public delete(id: number) {
    return this.http.delete(environment.API_URL + 'modais/' + id);
  }
}