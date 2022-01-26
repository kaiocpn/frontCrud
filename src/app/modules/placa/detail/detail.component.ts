import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Placa } from 'src/app/model/placa.model';

import { PlacaService } from 'src/app/services/placa/placa.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private placaService: PlacaService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  item: Placa;
  titulo: string;

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.params['id'] == null) {
      this.item = new Placa();
      this.titulo = 'Nova Placa';
    } else {
      this.titulo = 'Editar Placa';
      this.placaService.get(this.activatedRoute.snapshot.params['id'])
        .subscribe((x: any) => this.item = x);
    }

    console.log();
  }

  onSubmit() {
    if (this.activatedRoute.snapshot.params['id'] == null) {
      this.placaService.save(this.item)
        .subscribe(x => {
          console.log("Salvo com sucesso!");
          this.location.back();
        });
    } else {
      this.placaService.update(this.activatedRoute.snapshot.params['id'], this.item)
        .subscribe(x => {
          console.log("Atualizado com sucesso!");
          this.location.back();
        });
    }
  }

}
