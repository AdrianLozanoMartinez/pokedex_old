import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodospokemonsService } from '../../service/todospokemons.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 

  nombreDelPokemon: string   

  urlImage: string   

  error2: string;   

  constructor( private pokemonService: TodospokemonsService ) { }

  ngOnInit(): void {
  }

  search(){

    this.error2 = "";   //Para que aparezca el fallo cada vez que introducimos el dato
    this.urlImage = "";

    this.pokemonService.getPokemon(this.nombreDelPokemon).subscribe(   
      
      (respuesta:any) => {   

      console.log(respuesta)

      this.urlImage = respuesta.sprites.front_default   

    },
    error => {   
      console.log(error.error);
      
      this.error2 = error.error   
    }
    )
  }

}
