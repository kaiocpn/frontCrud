import { Component, OnInit } from '@angular/core';
import { Placa } from 'src/app/model/placa.model';
import { DespachoService } from 'src/app/services/despacho/despacho.service';
import { PlacaService } from 'src/app/services/placa/placa.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private placaService: PlacaService, private despachoService: DespachoService) { }
  placas: Array<Placa> = [];

  ngOnInit(): void {
    this.placaService.getAll()
      .subscribe((e: any) => {
        console.log(e);
        this.placas = e;
      });
  }

  delete(id: number) {
    this.placaService.delete(id)
      .subscribe(x => {
        console.log("Removido com sucesso!");
        this.ngOnInit();
      });
  }

  despachar(markNumber: any) {
    let tipoPlaca = 1;

    let objetoDespacho = {
      markNumbers: [markNumber],
      data: new Date(),
      placa_id: 1
    }

    this.despachoService.despachar(objetoDespacho)  
      .subscribe(x => console.log("OK"));
  }

}
