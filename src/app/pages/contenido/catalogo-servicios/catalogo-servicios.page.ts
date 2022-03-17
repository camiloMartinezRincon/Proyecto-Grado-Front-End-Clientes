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
  prodcutosagregados: [{}];

  constructor(public restService: ProjectService) { }

  ngOnInit() {
    this.restService.getProductos().subscribe((resp: any) => {
      this.productos = resp;

    });
  }

  addProduct(addedP:any){
    const emailCliente = localStorage.getItem('userEmail');
    let product = {
      nombreServicio:addedP.nombreServicio,
      precioServicio:addedP.precioServicio,
      descripcionServicio:addedP.descripcionServicio,
      direccionRecurso:emailCliente,
    }
    this.prodcutosagregados.push(product);
  }

  finalizar(){
    this.restService.postCotizacionProductos(this.prodcutosagregados).subscribe((resp: any) => {
      if(resp == "ENVIADO"){
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
