import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageAutentificacionPage } from './pages/autentificacion/landing-page-autentificacion/landing-page-autentificacion.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LandingPageAutentificacionPage,
    data:{title:'Inicio Sesión'}
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/autentificacion/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/autentificacion/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/autentificacion/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./pages/contenido/mis-proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'nueva-entrega',
    loadChildren: () => import('./pages/contenido/nueva-entrega/nueva-entrega.module').then( m => m.NuevaEntregaPageModule)
  },
  {
    path: 'mis-entregas',
    loadChildren: () => import('./pages/contenido/mis-entregas/mis-entregas.module').then( m => m.MisEntregasPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'table-reports',
    loadChildren: () => import('./pages/table-reports/table-routing.module').then( m => m.TableReportsRoutingModule)
  },
  {
    path: 'mis-cotizaciones',
    loadChildren: () => import('./pages/contenido/mis-cotizaciones/mis-cotizaciones.module').then( m => m.MisCotizacionesPageModule)
  },
  {
    path: 'nueva-cotizacion',
    loadChildren: () => import('./pages/contenido/nueva-cotizacion/nueva-cotizacion.module').then( m => m.NuevaCotizacionPageModule)
  },  {
    path: 'new-project',
    loadChildren: () => import('./pages/contenido/new-project/new-project.module').then( m => m.NewProjectPageModule)
  },
  {
    path: 'catalogo-servicios',
    loadChildren: () => import('./pages/contenido/catalogo-servicios/catalogo-servicios.module').then( m => m.CatalogoServiciosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
