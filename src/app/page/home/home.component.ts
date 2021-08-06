import { Component, OnInit } from '@angular/core';
import { TodospokemonsService } from '../../service/todospokemons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   pokemon: string [] = [];
   image:string;

  constructor( private servicioPokemon: TodospokemonsService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){

    let pokemonData;  

    for (let i=1; i <= 898; i++ ){  

      this.servicioPokemon.getPokemon(i).subscribe( (resp:any) => {  

         pokemonData = {  
           position: resp.id,
           image: resp.sprites.front_default,  
           imageback: resp.sprites.back_default,  
           name: resp.name,
           weight: resp.weight,
           id: resp.id,
           height: resp.height,
           types: resp.types[0].type.name,    //Si cogemos el 1º elemento, si cogemos el 2 sería [1]
         };
         this.pokemon.push(pokemonData);  
      },
      
    error => {
      console.log(error.error);
      
      //Sacar variable para usar los errores, pero después cuando funcione todo
    }
    
    );
  }

}
  
}
