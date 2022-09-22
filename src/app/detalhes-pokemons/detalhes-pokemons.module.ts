import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPokemonsPageRoutingModule } from './detalhes-pokemons-routing.module';

import { DetalhesPokemonsPage } from './detalhes-pokemons.page';
import { TabBarComponent } from '../components/tab-bar/tab-bar.component';
import { PokemonsPageRoutingModule } from '../pokemons/pokemons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPokemonsPageRoutingModule,
    PokemonsPageRoutingModule
  ],
  declarations: [DetalhesPokemonsPage, TabBarComponent]
})
export class DetalhesPokemonsPageModule {}
