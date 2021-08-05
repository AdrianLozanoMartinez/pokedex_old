import { Component, OnInit } from '@angular/core';
import { TodospokemonsService } from '../../service/todospokemons.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: string [] = [];
  pokemons = [];
  image:string;

  constructor( private servicioPokemon: TodospokemonsService) { 
    
  }

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
          name: resp.name,
          weight: resp.weight,
          order: resp.order,
        };
        this.pokemon.push(pokemonData);  
         
      },
    // },
    error => {
      console.log(error.error);
      
      //Sacar variable para usar los errores, pero después cuando funcione todo
    }
    
    );
  }

}
  
}
