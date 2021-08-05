import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodospokemonsService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor( private http: HttpClient ) { 

  }


  getPokemon( nameIndex ){

       return  this.http.get(`${this.url}/${nameIndex}`)

   }


  

}
