import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: 'ini-menu',
    loadChildren: () => import('./ini-menu/ini-menu.module').then( m => m.IniMenuPageModule)
  },
  {
    path: 'm01-bebidas',
    loadChildren: () => import('./m01-bebidas/m01-bebidas.module').then( m => m.M01BebidasPageModule)
  },
  {
    path: 'm02-bebidas',
    loadChildren: () => import('./m02-bebidas/m02-bebidas.module').then( m => m.M02BebidasPageModule)
  },
  {
    path: 'm03-almuerzos',
    loadChildren: () => import('./m03-almuerzos/m03-almuerzos.module').then( m => m.M03AlmuerzosPageModule)
  },
  {
    path: 'm04-desayunos',
    loadChildren: () => import('./m04-desayunos/m04-desayunos.module').then( m => m.M04DesayunosPageModule)
  },
  {
    path: 'm05-cenas',
    loadChildren: () => import('./m05-cenas/m05-cenas.module').then( m => m.M05CenasPageModule)
  },
  {
    path: 'm06-refacciones',
    loadChildren: () => import('./m06-refacciones/m06-refacciones.module').then( m => m.M06RefaccionesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
