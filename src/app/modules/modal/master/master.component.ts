import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Modal } from 'src/app/model/modal.model';
import { DespachoService } from 'src/app/services/despacho/despacho.service';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private modalService: ModalService, private despachoService: DespachoService) { }
  modal: Array<Modal> = [];

  ngOnInit(): void {
    this.modalService.getAll()
      .subscribe((e: any) => {
        console.log(e);
        this.modal = e;
      });
  }
  delete(id: any) {
    this.modalService.delete(id)
      .subscribe(x => {
        console.log("Removido com sucesso!");
        this.ngOnInit();
      });
  }
}
