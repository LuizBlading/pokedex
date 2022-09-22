import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPokemonsPage } from './detalhes-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPokemonsPageRoutingModule {}
