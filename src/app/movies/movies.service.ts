import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _url: string = 'https://swapi.co/api/films/';
  constructor(private http: HttpClient) {}
 
  getMovies(): Observable<IMovies> {
    //conts httpOptions = {header: new HttpHeaders};
    // return this.http.get<IMovies>(this._url, httpOtions);
    return this.http.get<IMovies>(this._url);
  }
    
}
