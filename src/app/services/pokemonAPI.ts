import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonAPI {

    private API_URL = 'https://pokeapi.co/api/v2/';
    header: any;

    constructor(
        public http: HttpClient
    ) { 
        this.header = new Headers();
        this.header.append('content-type', 'application/json')
    }

    getPokemonById(pokemonID){
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).toPromise();
    }

    teste(uf){
        return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`, {headers: this.header}).toPromise();
    }
}