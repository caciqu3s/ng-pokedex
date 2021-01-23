import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokemonsListResponse } from 'src/app/shared/pokemons-list-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public getPokemon(url?: string): Observable<PokemonsListResponse> {
    return this.http.get<PokemonsListResponse>(`${ url ? url : this.baseUrl }`); 
  }

  public getPokemonDetails(url?: string, id?: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${ url ? url : this.baseUrl + '/' + id }`); 
  }
}
