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
  public indices = [1,2,3,4,5,6];
  public imgPokemon: any = [];
  public hasType1: Boolean;
  public hasType2: Boolean;

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
          
          if(response.types[0] != null){
            this.hasType1 = true;
          } else {
            this.hasType1 = false;
          }

          if(response.types[1] != null){
            this.hasType2 = true;
          } else {
            this.hasType2 = false;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

}
