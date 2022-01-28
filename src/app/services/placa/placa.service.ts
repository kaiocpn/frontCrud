import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Placa } from 'src/app/model/placa.model';


   

@Injectable({
  providedIn: 'root'
})
export class PlacaService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(environment.API_URL + 'placas');
  }

  public save(obj: any) {
    return this.http.post(environment.API_URL + 'placas', obj);
  }

  public update(id: number, obj: any) {
    return this.http.put(environment.API_URL + 'placas/' + id, obj);
  }

  public get(id: number) {
    return this.http.get(environment.API_URL + 'placas/' + id);
  }

  public delete(id: number) {
    return this.http.delete(environment.API_URL + 'placas/' + id);
  }
}
