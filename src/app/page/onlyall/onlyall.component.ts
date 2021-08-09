import { Component, OnInit } from '@angular/core';
import { TodospokemonsService } from '../../service/todospokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onlyall',
  templateUrl: './onlyall.component.html',
  styleUrls: ['./onlyall.component.css']
})
export class OnlyallComponent implements OnInit {

  pokemon: any = '';  
  pokemonType = [];  
  image = '';  
  imageback = '';  
  height = '';
  weight = '';
  errorN: string;  

  constructor( private pokemonService: TodospokemonsService, activatedRouter: ActivatedRoute ) { 
      activatedRouter.params.subscribe(  
        params => {
        this.getPokemon1(params['id']); 
        }
      );
  }  

  ngOnInit(): void {
  }

  getPokemon1(id){
    this.pokemonService.getPokemon(id).subscribe(  
      res => {  
        // console.log(res);
        this.pokemon = res;  //para usar pokemon.id...
        this.image = this.pokemon.sprites.front_default;  
        this.imageback = this.pokemon.sprites.back_default;  
        this.pokemonType = this.pokemon.types[0].type.name;  //Si cogemos el 1º elemento, si cogemos el 2 sería [1]
        this.height = this.pokemon.height;
        this.weight = this.pokemon.weight;

        if ( this.pokemon.types[0].type.name === 'grass' ) {
            this.pokemonType = [' Planta'];
        }else if ( this.pokemon.types[0].type.name === 'bug' ) {
          this.pokemonType = [' Bicho'];
        }else if ( this.pokemon.types[0].type.name === 'water' ) {
          this.pokemonType = [' Agua'];
        }else if ( this.pokemon.types[0].type.name === 'fire' ) {
          this.pokemonType = [' Fuego'];
        }else if ( this.pokemon.types[0].type.name === 'poison' ) {
          this.pokemonType = [' Veneno'];
        }else if ( this.pokemon.types[0].type.name === 'ground' ) {
          this.pokemonType = [' Tierra'];
        }else if ( this.pokemon.types[0].type.name === 'electric' ) {
          this.pokemonType = [' Eléctrico'];
        }else if ( this.pokemon.types[0].type.name === 'fairy' ) {
          this.pokemonType = [' Hada'];
        }else if ( this.pokemon.types[0].type.name === 'rock' ) {
          this.pokemonType = [' Roca'];
        }else if ( this.pokemon.types[0].type.name === 'fighting' ) {
          this.pokemonType = [' Lucha'];
        }else if ( this.pokemon.types[0].type.name === 'psychic' ) {
          this.pokemonType = [' Psíquico'];
        }else if ( this.pokemon.types[0].type.name === 'ghost' ) {
          this.pokemonType = [' Fantasma'];
        }else if ( this.pokemon.types[0].type.name === 'ice' ) {
          this.pokemonType = [' Hielo'];
        }else if ( this.pokemon.types[0].type.name === 'dragon' ) {
          this.pokemonType = [' Dragón'];
        }else if ( this.pokemon.types[0].type.name === 'steel' ) {
          this.pokemonType = [' Acero'];
        }else if ( this.pokemon.types[0].type.name === 'dark' ) {
          this.pokemonType = [' Oscuro'];
        }else if ( this.pokemon.types[0].type.name === 'flying' ) {
          this.pokemonType = [' Volador'];
        }
      },
      err => {  
        console.log(err);
        this.errorN = err.error
      }
    );
  }




}
