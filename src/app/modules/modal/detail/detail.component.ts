import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'src/app/model/modal.model';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private modalService: ModalService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }


    item: Modal;
    titulo: string;

    ngOnInit(): void {

      if (this.activatedRoute.snapshot.params['id'] == null) {
        this.item = new Modal();
        this.titulo = 'Novo Modal';
      } else {
        this.titulo = 'Editar Modal';
        this.modalService.get(this.activatedRoute.snapshot.params['id'])
          .subscribe((x: any) => this.item = x);
      }
  
      console.log();
    }
    onSubmit() {
      if (this.activatedRoute.snapshot.params['id'] == null) {
        this.modalService.save(this.item)
          .subscribe(x => {
            console.log("Salvo com sucesso!");
            this.location.back();
          });
      } else {
        this.modalService.update(this.activatedRoute.snapshot.params['id'], this.item)
          .subscribe(x => {
            console.log("Atualizado com sucesso!");
            this.location.back();
          });
      }
    }
  
  }

