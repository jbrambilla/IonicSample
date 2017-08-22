import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public feed = {
      titulo: "Jota",
      data: "Novembro 5, 1995",
      descricao: "App groselhendo",
      likes: 12,
      comments: 4,
      timeComment: "11h ago"
  };

  public MovieList = new Array<any>();

  public userName:string = "Jota";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
      
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto = JSON.parse(response._body);
        this.MovieList = objeto.results;
        console.log(objeto);
      },
      error => {
        console.log(error);
      }
    )
  }

}
