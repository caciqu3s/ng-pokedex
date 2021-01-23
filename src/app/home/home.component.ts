import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { PokemonsListResponse } from '../shared/pokemons-list-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  response$: Observable<PokemonsListResponse>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon() {
    this.response$ = this.pokemonService.getPokemon();
  }

}
