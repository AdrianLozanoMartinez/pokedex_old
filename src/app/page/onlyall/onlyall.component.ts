import { Component, OnInit } from '@angular/core';
import { TodospokemonsService } from '../../service/todospokemons.service';

import { ParamMap, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

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

  constructor( private pokemonService: TodospokemonsService,
               private activatedRouter: ActivatedRoute ) { 
      activatedRouter.params.subscribe(  
        params => {
        this.getPokemon1(params['id']); 
        }
      );
  }  

  ngOnInit(): void {
    this.getsearch();
  }

  getPokemon1(id){
    this.pokemonService.getPokemon(id).subscribe(  
      res => {  
        // console.log(res);
        this.pokemon = res;  //para usar pokemon.id...
        // this.image = this.pokemon.sprites.front_default;     //Imagen pixelada
        // this.imageback = this.pokemon.sprites.back_default;   //Imagen pixelada
        this.image = this.pokemon.sprites.other.dream_world.front_default;   //Mejor imagen
        this.pokemonType = this.pokemon.types[0].type.name;  //Si cogemos el 1º elemento, si cogemos el 2 sería [1]
        this.height = this.pokemon.height;
        this.weight = this.pokemon.weight;

         //CAMBIAR NOMBRE A MOSTRAR
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
        }else if ( this.pokemon.types[0].type.name === 'normal' ) {
          this.pokemonType = [' Normal'];
        }
      },
      err => {  
        console.log(err);
        this.errorN = err.error
      }
    );
  }

//Buscar
  private getsearch():void{  
  
    this.activatedRouter.queryParams.pipe(
      take(1) ).subscribe( (RecibeParams: ParamMap) => {  //take(1) -> no es necesario en este en otro si
        console.log('Params -> ', RecibeParams );
        
        this.pokemon = RecibeParams['params'];  //Cogemos el valor introducimos en la búsqueda
      })
  
  }

}
