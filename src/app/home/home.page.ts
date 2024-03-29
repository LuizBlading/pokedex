import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPI } from '../services/pokemonAPI';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [PokemonAPI]
})
export class HomePage {

  public pokemonObjResponse = [];
  public namePokemon: String;
  public isRequest: Boolean;
  public indices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  public imgPokemon: any = [];
  public hasType1: Boolean;
  public hasType2: Boolean;
  public pokemonImg: string = 'src/assets/Pokeball.svg';

  constructor(
    private pokemonService: PokemonAPI,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonById();
  }

  async getPokemonById() {
    try {
      for (let indice of this.indices) {
        const response = await this.pokemonService.getPokemonById(indice);

        console.log(response)

        if (response) {
          this.imgPokemon = response.sprites.front_default;
          this.pokemonObjResponse.push(response);
          this.isRequest = true;

          if (response.types[0] != null) {
            this.hasType1 = true;
          } else {
            this.hasType1 = false;
          }

          if (response.types[1] != null) {
            this.hasType2 = true;
          } else {
            this.hasType2 = false;
          }
        }
      }

      // const color = await this.pokemonService.getPokemonColor();
      // console.log(color);
    } catch (e) {
      console.log(e);
    }
  }

  // https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
  getColor(type) {
    switch (type) {
      case 'grass':
        return '#74CB48';
      case 'fire':
        return '#F57D31';
      case 'water':
        return '#6493EB';
      case 'rock':
        return '#B69E31';
      case 'ghost':
        return '#70559B';
      case 'steel':
        return '#B7B9D0';
      case 'psychic':
        return '#FB5584';
      case 'ice':
        return '#9AD6DF';
      case 'dark':
        return '#75574C';
      case 'fairy':
        return '#E69EAC';
      case 'normal':
        return '#AAA67F';
      case 'fight':
        return '#C12239';
      case 'flying':
        return '#A891EC';
      case 'poison':
        return '#A43E9E';
      case 'ground':
        return '#DEC16B';
      case 'bug':
        return '#A7B723';
      case 'electric':
        return '#F9CF30';
      case 'dragon':
        return '#7037FF';
    }
  }
}
