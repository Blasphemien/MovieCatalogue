import { Injectable } from '@angular/core';
import {Jsonp} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class MovieService {
  apiKey: string;

  /* Setup api */
  constructor(private _jsonp: Jsonp) {
    this.apiKey = '94a26a4e3ae5d82a3c426e5bec3150e5';
    console.log('MovieService Initilalized');
  }

  GetMovie(id: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
      .map(res => res.json());
  }

  /* Get popular movies*/
  GetPopularMovies(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(res => res.json());
  }

  /* Get movies in theaters */
  GetMoviesInTheaters (){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-01-11&primary_release_date.lte=2017-02-28&api_key='+this.apiKey)
      .map(res => res.json());
  }

  /* Get highest rated movies rated 'R'*/
  GetHighestRatedRatedRMovies(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&certification_country=US&certification=R&sort_by=vote_average.desc&primary_release_date.gte=2015-01-01&primary_release_date.lte=2017-01-01&api_key='+this.apiKey)
      .map(res => res.json());
  }

  /* Search for movies */
  SearchMovies(search: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+search+'&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(res => res.json());
  }

}
