import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/model/modal.model';
import { Placa } from 'src/app/model/placa.model';
import { DespachoService } from 'src/app/services/despacho/despacho.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { PlacaService } from 'src/app/services/placa/placa.service';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private placaService: PlacaService, private despachoService: DespachoService, private modalService: ModalService, 
  private toastr: ToastrService) { }

  placas: Array<Placa> = [];
  modal!: Array<Modal>;


  excluirToatr(){
    this.toastr.error('Placa Excluida com sucesso');
  }
  despacharToatr(){
    this.toastr.success('Placa Despachada com sucesso');
  }
  

  ngOnInit(): void {
    this.placaService.getAll()
      .subscribe((e: any) => {
        console.log(e);
        this.placas = e;
      });
        this.modalService.getAll()
          .subscribe((x: any) => this.modal = x);
  }

  delete(id: number) {
    this.placaService.delete(id)
      .subscribe(x => {
        console.log("Removido com sucesso!");
        this.ngOnInit();
      });
  }

  despachar(markNumber: any, modalid: number) {
    let tipoPlaca = 1;

    let objetoDespacho = {
      markNumbers: [markNumber],
      data: new Date(),
      modal_id: modalid
    }

    this.despachoService.despachar(objetoDespacho)  
      .subscribe(x => console.log("OK"));
  }
 
}
