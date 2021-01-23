import { PokemonResponse } from './pokemon-response';

export class PokemonsListResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonResponse[];
}