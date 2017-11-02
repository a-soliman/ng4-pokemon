import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';


@Component({
	moduleId: module.id,
	selector: "pk-list",
	templateUrl: "list-pokemons.template.html"
})

export class ListPokemonsComponent implements OnInit {
	pokemon: Pokemon[];
	errorMessage: string;

	
	constructor(private _pokemonService: PokemonService) {}

	ngOnInit() {
		// get all Pokemons
		this.getPokemons();
	}

	getPokemons() {
		// make a call to the service
		this._pokemonService.getPokemons()
			.subscribe(
				(pokemon: Pokemon[]) => {
					console.log(pokemon);
					this.pokemon = pokemon;
				},
				error => this.errorMessage = error
			)

	}

	deletePokemon(pokemon: Pokemon) {
		this._pokemonService.deletePokemon(pokemon)
			.subscribe(
				() => {},
				error => this.errorMessage = <any> error,
				() => {
					this.getPokemons()
				}
			)
	}
}
