import { Component, OnInit } from '@angular/core';
import { TodospokemonsService } from '../../service/todospokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-only',
  templateUrl: './only.component.html',
  styleUrls: ['./only.component.css']
})
export class OnlyComponent implements OnInit {

  pokemon: any = '';  
  pokemonType = [];  
  image = '';  
  imageback = '';  
  height = '';
  weight = '';

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
      },
      err => {  
        console.log(err);
        
      }
    );
  }

}
