import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
