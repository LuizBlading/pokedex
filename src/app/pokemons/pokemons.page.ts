import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPI } from '../services/pokemonAPI';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
  providers: [PokemonAPI]
})
export class PokemonsPage implements OnInit {

  public pokemonObjResponse = [];
  public namePokemon: String;
  public isRequest: Boolean;
  public indices = [1, 2, 3, 4, 5];
  public imgPokemon: any = [];

  constructor(
    private pokemonService: PokemonAPI
  ) { }

  ngOnInit() {
  }

  async getPokemonById() {
    try {
      for(let indice of this.indices ){
        const response = await this.pokemonService.getPokemonById(indice);

        
        if (response) {
          this.imgPokemon = response.sprites.front_default;
          this.pokemonObjResponse.push(response);
          this.isRequest = true;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

}
