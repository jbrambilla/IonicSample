import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath:string = "http://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies()
  {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=7cf95844020db58fec499e2a9b3defab");
  }
}
