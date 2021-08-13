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

  constructor( private pokemonService: TodospokemonsService,
               private route: Router ) { }

  ngOnInit(): void {
  }

  search( value: string ){

    this.error2 = "";   //Para que aparezca el fallo cada vez que introducimos el dato
    this.urlImage = "";

    
    this.pokemonService.getPokemon(this.nombreDelPokemon.toLocaleLowerCase()).subscribe(   //toLocaleLowerCase() -> Minúscula, toLocaleUpperCase() -> Mayúscula, toLowerCase(), toUpperCase(), valueOf(), length(), 
      
      (respuesta:any) => {   
        
        console.log(respuesta)

      this.urlImage = respuesta.sprites.front_default  
      
      this.route.navigate ( ['/onlyall', respuesta.id ] ),  //Va a la página mandando la id
      {                          
        queryParams: { params: value },  //Coge el valor que introducimos y mediante el nombre params u otro lo cogemos en onlyall
      };

    },
    error => {   
      console.log(error.error);
      
      this.error2 = error.error   
    }
    )
  }

}
