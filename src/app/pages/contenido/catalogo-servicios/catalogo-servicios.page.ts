import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-servicios',
  templateUrl: './catalogo-servicios.page.html',
  styleUrls: ['./catalogo-servicios.page.scss'],
})
export class CatalogoServiciosPage implements OnInit {
  productos: any [];
  prodcutosagregados: any[] = [];

  constructor(public restService: ProjectService) { }

  ngOnInit() {
    this.restService.getProductos().subscribe((resp: any) => {
      this.productos = resp;
    });
  }

  addProduct(addedP:any){
    const emailCliente = localStorage.getItem('userEmail');
    addedP.user = emailCliente;
    console.log(addedP)
    this.prodcutosagregados.push(addedP);
    console.log(this.prodcutosagregados)
  }

  finalizar(){
    this.restService.postCotizacionProductos(this.prodcutosagregados).subscribe((resp: any) => {
      if(resp == true){
        this.prodcutosagregados = [];
        Swal.fire({
          title: 'Productos Agregados',
          text: 'Se verificará a información y en breve se realizará el envío de la cotización',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        })
      }

    });



  }


}
