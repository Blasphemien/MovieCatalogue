import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _movieService: MovieService) {
    this._movieService.GetPopularMovies().subscribe(res => {console.log(res.results)});
    this._movieService.GetMoviesInTheaters().subscribe(res => {console.log(res.results)});
  }

  ngOnInit() {
  }

}
