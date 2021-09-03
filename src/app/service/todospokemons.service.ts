import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodospokemonsService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor( private http: HttpClient ) { }

  //NUEVO para paginacion y quizas para general
  getTODOSPokemon( limit: number, offset: number ){

    return  this.http.get(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  //Sin paginación funciona que aparezca todos, búsqueda e individual  /  COn paginación se usa solo para búsqueda e individual
  getPokemon( nameIndex ){

       return  this.http.get(`${this.url}/${nameIndex}`);
   }

}
