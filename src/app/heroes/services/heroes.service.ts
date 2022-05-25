import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl

  getHeroes(): Observable<Heroe[]>{
     return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroeById(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${id}`);
  }

  getSugerencias(terimno:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${terimno}&_limit=6`);
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
  }

  editarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe(id: string): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${id}`);
  }

}
