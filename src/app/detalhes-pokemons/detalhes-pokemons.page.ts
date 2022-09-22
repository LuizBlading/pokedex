import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-pokemons',
  templateUrl: './detalhes-pokemons.page.html',
  styleUrls: ['./detalhes-pokemons.page.scss'],
})
export class DetalhesPokemonsPage implements OnInit {

  private pokemon: any;
  private dados: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    )
    { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {    
      this.pokemon = this.router.getCurrentNavigation().extras.state.pokemon;
      console.log(this.pokemon)
    })
  }

}
