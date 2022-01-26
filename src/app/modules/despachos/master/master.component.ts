import { Component, OnInit } from '@angular/core';
import { Despacho } from 'src/app/model/despachos.model';
import { DespachoService } from 'src/app/services/despacho/despacho.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private despachoService: DespachoService) { }
  despachos: Array<Despacho> = [];

  ngOnInit(): void {
    this.despachoService.getAll()
      .subscribe((e: any) => {
        console.log(e);
        this.despachos = e;
      });
  }
}
