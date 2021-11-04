import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { ArticulosService } from './articulos.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  articulos:any;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient,private articulosService:ArticulosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    /* this.httpClient.get("https://www.datos.gov.co/resource/h9zk-qh33.json")
      .subscribe(data => {
        this.articulos = data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      },
      error=>{
        console.log("Error al cargar json")
      }

      ); */


    this.articulosService.retornar()
    .subscribe(result=>{this.articulos=result,
      this.dtTrigger.next();});
  }
}
