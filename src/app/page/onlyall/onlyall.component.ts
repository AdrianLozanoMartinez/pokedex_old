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
      },
      err => {  
        console.log(err);
        this.errorN = err.error
      }
    );
  }

}
