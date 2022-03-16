import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-cotizacion',
  templateUrl: './nueva-cotizacion.page.html',
  styleUrls: ['./nueva-cotizacion.page.scss'],
})
export class NuevaCotizacionPage implements OnInit {
  nuevaCotizacionForm: FormGroup;
  emailDefault = localStorage.getItem('userEmail');
  cotizaciones:[];

  constructor(private formBuilder: FormBuilder, public projectService: ProjectService, public router: Router) { 
  }

  ngOnInit() {
    this.nuevaCotizacionForm = this.formBuilder.group({
      cliNombreApellido: ['', [Validators.required]],
      clientCotiEmail: ['', [Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      startDateCotizacion: ['', [Validators.required]],
      endDateCotizacion: ['', [Validators.required]],
      tipoDeServicio: ['', [Validators.required]],
      txtAreaDescriptionCotizacion: ['', [Validators.required]],
      ownerMail: [localStorage.getItem('userEmail')]
    });
  }

  crearNuevaCotizacion() {
    let cotizacion = {
      clienteNombreApellido: this.nuevaCotizacionForm.controls['cliNombreApellido'].value,
      corpEmail: this.nuevaCotizacionForm.controls['clientCotiEmail'].value,
      fechaInicio: this.nuevaCotizacionForm.controls['startDateCotizacion'].value,
      fechaEntrega: this.nuevaCotizacionForm.controls['endDateCotizacion'].value,
      tipoServicio: this.nuevaCotizacionForm.controls['tipoDeServicio'].value,
      cotizacionDescripcion: this.nuevaCotizacionForm.controls['txtAreaDescriptionCotizacion'].value,
      ownerMail: this.nuevaCotizacionForm.controls['ownerMail'].value
    };
    this.projectService.crearCotizacion(cotizacion).subscribe((data: any) => {
      if (data =! null) {
        console.log('Procesado');
        Swal.fire({
          title: 'Cotizacion Creada',
          icon: 'info',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        }).then((result) => {
          this.ngOnInit();
          this.router.navigate(['/mis-cotizaciones']);
        });
      }else{
        Swal.fire({
          title: 'Error en la  creación',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Cerrar',
        });
      }
    });
  }

}
