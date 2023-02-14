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
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then( m => m.PokemonsPageModule)
  },
  {
    path: 'detalhes-pokemon',
    loadChildren: () => import('./detalhes-pokemons/detalhes-pokemons.module').then( m => m.DetalhesPokemonsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
