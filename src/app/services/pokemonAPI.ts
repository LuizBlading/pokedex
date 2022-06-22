import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonAPI {

    private API_URL = 'https://pokeapi.co/api/v2/';

    constructor(
        public http: HttpClient
    ) { }

    getPokemonById(pokemonID){
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).toPromise();
    }
}