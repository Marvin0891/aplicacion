import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  
    {
      path: 'music',
      loadChildren: () => import('./pages/music/music.module').then( m => m.MusicPageModule)
    },
    {
      path: 'movies',
      loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
    },
    {
      path: 'games',
      loadChildren: () => import('./pages/games/games.module').then( m => m.GamesPageModule)
    },
  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
