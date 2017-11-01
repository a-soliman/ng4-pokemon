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

	}
}
