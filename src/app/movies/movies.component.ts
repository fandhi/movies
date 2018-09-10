import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovies } from './movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public moviesStarWars;

  constructor(private _MoviesService: MoviesService) {}
  ngOnInit() {
    this._MoviesService.getMovies()
    .subscribe((data: IMovies) => {this.moviesStarWars = data.results; console.log(this.moviesStarWars);});  
    //.subscribe(data => this.moviesStarWars = data);
  }

}
