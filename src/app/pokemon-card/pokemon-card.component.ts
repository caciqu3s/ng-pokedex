import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { Pokemon } from '../shared/pokemon';
import { PokemonResponse } from '../shared/pokemon-response';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: PokemonResponse;

  pokemonDetails: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetails(this.pokemon.url).subscribe(pokemon => this.pokemonDetails = pokemon);
  }

}
