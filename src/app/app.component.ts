import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
// export class AppComponent implements OnInit {
//   public moviesStarWars = [];

//   constructor(private _MoviesService: MoviesService) {}
//   ngOnInit() {
//     this._MoviesService.getMovies()
//       .subscribe(arg => this.moviesStarWars = arg);
//       console.log(this.moviesStarWars);
    
//   }
// }


